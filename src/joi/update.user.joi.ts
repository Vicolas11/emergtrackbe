import Joi from "joi";

export const UpdateUserInputSchema = Joi.object({
  firstName: Joi.string().min(3),
  lastName: Joi.string().min(3),
  username: Joi.string().min(3),
  avatar: Joi.string().min(3),
  phone: Joi.string().min(10),
});
