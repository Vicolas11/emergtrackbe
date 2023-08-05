import Joi from "joi";

export const UpdatePasswordInputSchema = Joi.object({
  oldpassword: Joi.string().required(),
  newpassword: Joi.string().min(6).required(),
});
