// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { EnumRoleFieldUpdateOperationsInputSchemaObject } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { RequestUpdateManyWithoutUserNestedInputSchemaObject } from './RequestUpdateManyWithoutUserNestedInput.schema';
import { RequestUpdateManyWithoutDriverNestedInputSchemaObject } from './RequestUpdateManyWithoutDriverNestedInput.schema';
import { RequestUpdateManyWithoutRiderNestedInputSchemaObject } from './RequestUpdateManyWithoutRiderNestedInput.schema'

export const UserUpdateWithoutMessageInputSchemaObject = {
    firstName: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  lastName: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  username: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  userId: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  email: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  password: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  phone: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  avatar: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  role: Joi.alternatives().try(Joi.object().keys(EnumRoleFieldUpdateOperationsInputSchemaObject)),
  createAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  request: Joi.object().keys(RequestUpdateManyWithoutUserNestedInputSchemaObject),
  requestD: Joi.object().keys(RequestUpdateManyWithoutDriverNestedInputSchemaObject),
  requestR: Joi.object().keys(RequestUpdateManyWithoutRiderNestedInputSchemaObject)
}