// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutRequestInputSchemaObject } from './UserCreateNestedOneWithoutRequestInput.schema';
import { UserCreateNestedOneWithoutRequestRInputSchemaObject } from './UserCreateNestedOneWithoutRequestRInput.schema'

export const RequestCreateWithoutDriverInputSchemaObject = {
    id: Joi.string(),
  plate_num: Joi.string().required(),
  brand: Joi.string().required(),
  vin: Joi.string().required(),
  location: Joi.string().required(),
  info: Joi.alternatives().try(Joi.string()),
  isRead: Joi.boolean(),
  date: Joi.date(),
  user: Joi.object().keys(UserCreateNestedOneWithoutRequestInputSchemaObject),
  rider: Joi.object().keys(UserCreateNestedOneWithoutRequestRInputSchemaObject)
}