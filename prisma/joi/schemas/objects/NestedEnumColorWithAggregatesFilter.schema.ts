// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumColorFilterSchemaObject } from './NestedEnumColorFilter.schema'

export const NestedEnumColorWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumColorWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumColorFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumColorFilterSchemaObject)
}