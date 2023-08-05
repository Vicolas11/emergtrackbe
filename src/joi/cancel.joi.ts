import Joi from "joi";

export const cancelRequestInputSchema = Joi.object({
  id: Joi.string().length(24).required(),
});
