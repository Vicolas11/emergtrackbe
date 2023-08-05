import { carBrands, carColors } from "../utils/itemlist.utils";
import Joi from "joi";

export const assignRequestInputSchema = Joi.object({
  id: Joi.string().length(24).required(),
  driverEmail: Joi.string().email().required(),
  riderEmail: Joi.string().email().required(),
  userEmail: Joi.string().email().required(),
  location: Joi.string().min(5).required(),
  plate_num: Joi.string().min(3).required(),
  brand: Joi.string().valid(...carBrands).required(),
  color: Joi.string().valid(...carColors).required(),
});
