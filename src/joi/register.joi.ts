import Joi from "joi";

export const RegisterInputSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  email: Joi.string().email().min(5).required(),
  role: Joi.string().valid(...["user","User","driver","Driver","rider","Rider"]).required(),
  password: Joi.string().required(),
  phone: Joi.string().min(10).required(),
});
