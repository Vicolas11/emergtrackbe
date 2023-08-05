// @ts-nocheck
import Joi from 'joi';
import { NestedEnumColorWithAggregatesFilterSchemaObject } from './NestedEnumColorWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumColorFilterSchemaObject } from './NestedEnumColorFilter.schema'

export const EnumColorWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumColorWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumColorFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumColorFilterSchemaObject)
}