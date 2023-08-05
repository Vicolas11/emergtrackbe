// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const MessageWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#MessageWhereInput'),
Joi.array().items(Joi.link('#MessageWhereInput'))),
  OR: Joi.array().items(Joi.link('#MessageWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#MessageWhereInput'),
Joi.array().items(Joi.link('#MessageWhereInput'))),
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
Joi.string()),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}