// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { EnumColorFieldUpdateOperationsInputSchemaObject } from './EnumColorFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { EnumStatusFieldUpdateOperationsInputSchemaObject } from './EnumStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutRequestNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutRequestNestedInput.schema';
import { UserUpdateOneWithoutRequestRNestedInputSchemaObject } from './UserUpdateOneWithoutRequestRNestedInput.schema'

export const RequestUpdateWithoutDriverInputSchemaObject = {
    plate_num: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  brand: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  vin: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  color: Joi.alternatives().try(Joi.object().keys(EnumColorFieldUpdateOperationsInputSchemaObject)),
  location: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  info: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NullableStringFieldUpdateOperationsInputSchemaObject)),
  isRead: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  status: Joi.alternatives().try(Joi.object().keys(EnumStatusFieldUpdateOperationsInputSchemaObject)),
  date: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  user: Joi.object().keys(UserUpdateOneRequiredWithoutRequestNestedInputSchemaObject),
  rider: Joi.object().keys(UserUpdateOneWithoutRequestRNestedInputSchemaObject)
}