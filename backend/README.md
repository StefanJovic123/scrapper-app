# Service Provider App - BACKEND


## Instructions for starting App

#### prerequisites
1. Node.js version: 14.15.1+
2. Postgres version 10
3. DB with name `backend-app` needs to be created before running app
4. Add .env file into root of application with following values (these are example values):

```
PORT=8080
ENVIRONMENT=DEV
JWT_SECRET=secretjwttoken

PSQL_DB_HOST=localhost
PSQL_DB_DATABASE=backend-app
PSQL_DB_USERNAME=root
PSQL_DB_PASSWORD=root
```

#### starting app
after all steps above are completed following commands needs to be executed
1. run command `yarn install`
2. run command `yarn setup:db` - this command will run migrations and seeders
3. run command `yarn start` or `yarn start:dev` - this command will use `nodemon`

Application will be available on port `8080` if not specified otherwise - it is recommended to use 8080 as apps port cause of Postman collection added as part of this repo

4. Load postman collection into Postman App and start playing with app. postamn collection is part of this repo under root of the repo on named as follows: `Backend APP.postman_collection.json`

5. play around with API :D


# Arhitecture
Applications architecture is based on Clean Architecture but with some updates, there are 5 Layers that communicate only with their neighboring layers while calling only entities from the layer beneath and responding to messages from the layer above.

![78fdb352-ffb7-4f60-bb66-9782fa9ed7c4](https://user-images.githubusercontent.com/11150288/121835644-17d58600-ccd2-11eb-8cb9-dabb8a3895d9.png)

Communication between infrastructure, application, and domain layers is shown on the next diagram. We can see here that controllers are aggregation layer above use cases, controller can use an arbitrary number of use cases**.* therefore defining behavior of controller but not poluting controllers codebase with business logic it keeping it declarative as much as possible, so what controller does and can easily read from code, for exmaple:

Controller for adding item from shop to a cart so it can be later bought would look something like this:

```
export default ({ CheckStock }, { AddToCart }) => async (_req, res, next) => {
  try {
    const { body } = req;
    
    // this method will throw erorr which will be caught by global error handlers
    await CheckStock.execute(body.itemId, body.quantity);

    const result = await AddToCart.execute(body.itemId, body.quantity)

    return res.sendRes(result);
  } catch (error) {
    next(error);
  }
}

```

By looking at a code above it is easy to understand process of adding some item to the shopping cart. All underlying logic of actually adding item to shopping cart is defined in services/repositories where all necessary checks and db updates are done, totally agnostic of how that part is actually done on controller level, cause application layer where controllers are defined do not care about underlying logic.


![2d229ab1-d84d-48fe-906d-2c4171a503ea](https://user-images.githubusercontent.com/11150288/121836766-6be16a00-ccd4-11eb-8dca-97c12d9fd4f3.png)

**Infrastructure layer**: this layer has all dependencies that application needs to properly function, here we define loggers, errorHandlers, ORMs.. etc, every dependecy that later can be easily replaced if needed without impacting other layers of application which are not and should not be aware of them as much as possible

**Domain layer** interactions and relations are shown on the following diagram.

![4c4651a4-1d26-4cf8-9dcf-8a35b17a5c56](https://user-images.githubusercontent.com/11150288/121836819-8582b180-ccd4-11eb-9dc1-718c804b6aa5.png)

