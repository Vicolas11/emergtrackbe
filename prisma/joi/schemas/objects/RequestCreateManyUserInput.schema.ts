// @ts-nocheck
import Joi from 'joi';


export const RequestCreateManyUserInputSchemaObject = {
    id: Joi.string(),
  plate_num: Joi.string().required(),
  brand: Joi.string().required(),
  vin: Joi.string().required(),
  location: Joi.string().required(),
  info: Joi.alternatives().try(Joi.string()),
  isRead: Joi.boolean(),
  date: Joi.date(),
  driverId: Joi.alternatives().try(Joi.string()),
  riderId: Joi.alternatives().try(Joi.string())
}