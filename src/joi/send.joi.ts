import { carBrands, carColors } from "../utils/itemlist.utils";
import Joi from "joi";

export const sendRequestInputSchema = Joi.object({
  plate_num: Joi.string().min(3).required(),
  brand: Joi.string().valid(...carBrands).required(),
  vin: Joi.string().length(17).required(),
  color: Joi.string().valid(...carColors).required(),
  location: Joi.string().min(5).required(),
  info: Joi.string().min(5),
});
