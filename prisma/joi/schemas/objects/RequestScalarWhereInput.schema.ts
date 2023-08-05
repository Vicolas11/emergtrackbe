// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { EnumColorFilterSchemaObject } from './EnumColorFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { EnumStatusFilterSchemaObject } from './EnumStatusFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const RequestScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#RequestScalarWhereInput'),
Joi.array().items(Joi.link('#RequestScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#RequestScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#RequestScalarWhereInput'),
Joi.array().items(Joi.link('#RequestScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  plate_num: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  brand: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  vin: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  color: Joi.alternatives().try(Joi.object().keys(EnumColorFilterSchemaObject)),
  location: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  info: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  isRead: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  status: Joi.alternatives().try(Joi.object().keys(EnumStatusFilterSchemaObject)),
  date: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  driverId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  riderId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string())
}