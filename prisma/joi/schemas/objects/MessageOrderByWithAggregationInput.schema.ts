// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MessageCountOrderByAggregateInputSchemaObject } from './MessageCountOrderByAggregateInput.schema';
import { MessageMaxOrderByAggregateInputSchemaObject } from './MessageMaxOrderByAggregateInput.schema';
import { MessageMinOrderByAggregateInputSchemaObject } from './MessageMinOrderByAggregateInput.schema'

export const MessageOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  messageId: SortOrderSchema,
  title: SortOrderSchema,
  content: SortOrderSchema,
  sender: SortOrderSchema,
  isRead: SortOrderSchema,
  date: SortOrderSchema,
  userId: SortOrderSchema,
  _count: Joi.object().keys(MessageCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(MessageMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(MessageMinOrderByAggregateInputSchemaObject)
}