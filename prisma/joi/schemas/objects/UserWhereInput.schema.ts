// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { EnumRoleFilterSchemaObject } from './EnumRoleFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { RequestListRelationFilterSchemaObject } from './RequestListRelationFilter.schema';
import { MessageListRelationFilterSchemaObject } from './MessageListRelationFilter.schema'

export const UserWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UserWhereInput'),
Joi.array().items(Joi.link('#UserWhereInput'))),
  OR: Joi.array().items(Joi.link('#UserWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#UserWhereInput'),
Joi.array().items(Joi.link('#UserWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  firstName: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  lastName: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  username: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  email: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  phone: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  avatar: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  role: Joi.alternatives().try(Joi.object().keys(EnumRoleFilterSchemaObject)),
  createAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  request: Joi.object().keys(RequestListRelationFilterSchemaObject),
  requestD: Joi.object().keys(RequestListRelationFilterSchemaObject),
  requestR: Joi.object().keys(RequestListRelationFilterSchemaObject),
  message: Joi.object().keys(MessageListRelationFilterSchemaObject)
}