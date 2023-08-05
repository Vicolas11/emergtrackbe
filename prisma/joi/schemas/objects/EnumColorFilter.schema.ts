// @ts-nocheck
import Joi from 'joi';
import { NestedEnumColorFilterSchemaObject } from './NestedEnumColorFilter.schema'

export const EnumColorFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumColorFilterSchemaObject))
}