// @ts-nocheck
import Joi from 'joi';


export const RequestUncheckedCreateWithoutDriverInputSchemaObject = {
    id: Joi.string(),
  plate_num: Joi.string().required(),
  brand: Joi.string().required(),
  vin: Joi.string().required(),
  location: Joi.string().required(),
  info: Joi.alternatives().try(Joi.string()),
  isRead: Joi.boolean(),
  date: Joi.date(),
  userId: Joi.string().required(),
  riderId: Joi.alternatives().try(Joi.string())
}