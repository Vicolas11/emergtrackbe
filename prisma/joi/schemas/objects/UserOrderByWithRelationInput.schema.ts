// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RequestOrderByRelationAggregateInputSchemaObject } from './RequestOrderByRelationAggregateInput.schema';
import { MessageOrderByRelationAggregateInputSchemaObject } from './MessageOrderByRelationAggregateInput.schema'

export const UserOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  firstName: SortOrderSchema,
  lastName: SortOrderSchema,
  username: SortOrderSchema,
  userId: SortOrderSchema,
  email: SortOrderSchema,
  password: SortOrderSchema,
  phone: SortOrderSchema,
  avatar: SortOrderSchema,
  role: SortOrderSchema,
  createAt: SortOrderSchema,
  request: Joi.object().keys(RequestOrderByRelationAggregateInputSchemaObject),
  requestD: Joi.object().keys(RequestOrderByRelationAggregateInputSchemaObject),
  requestR: Joi.object().keys(RequestOrderByRelationAggregateInputSchemaObject),
  message: Joi.object().keys(MessageOrderByRelationAggregateInputSchemaObject)
}