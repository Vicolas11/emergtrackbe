// @ts-nocheck
import Joi from 'joi';


export const RequestCreateManyRiderInputSchemaObject = {
    id: Joi.string(),
  plate_num: Joi.string().required(),
  brand: Joi.string().required(),
  vin: Joi.string().required(),
  location: Joi.string().required(),
  info: Joi.alternatives().try(Joi.string()),
  isRead: Joi.boolean(),
  date: Joi.date(),
  userId: Joi.string().required(),
  driverId: Joi.alternatives().try(Joi.string())
}