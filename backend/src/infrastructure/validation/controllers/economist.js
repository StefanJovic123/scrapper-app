import Joi from 'joi';

export default {
  articleById: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
};
