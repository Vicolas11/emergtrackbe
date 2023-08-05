// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const MessageScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#MessageScalarWhereInput'),
Joi.array().items(Joi.link('#MessageScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#MessageScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#MessageScalarWhereInput'),
Joi.array().items(Joi.link('#MessageScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  messageId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  title: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  content: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  sender: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  isRead: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  date: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string())
}