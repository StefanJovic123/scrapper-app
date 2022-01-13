import Joi from 'joi';

export default {
  articleFromUrl: {
    body: Joi.object({
      url: Joi.string().required(),
    }),
  },
};
