// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutRequestDInputSchemaObject } from './UserCreateNestedOneWithoutRequestDInput.schema';
import { UserCreateNestedOneWithoutRequestRInputSchemaObject } from './UserCreateNestedOneWithoutRequestRInput.schema'

export const RequestCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  plate_num: Joi.string().required(),
  brand: Joi.string().required(),
  vin: Joi.string().required(),
  location: Joi.string().required(),
  info: Joi.alternatives().try(Joi.string()),
  isRead: Joi.boolean(),
  date: Joi.date(),
  driver: Joi.object().keys(UserCreateNestedOneWithoutRequestDInputSchemaObject),
  rider: Joi.object().keys(UserCreateNestedOneWithoutRequestRInputSchemaObject)
}