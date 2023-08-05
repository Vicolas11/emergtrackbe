// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const MessageCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  messageId: SortOrderSchema,
  title: SortOrderSchema,
  content: SortOrderSchema,
  sender: SortOrderSchema,
  isRead: SortOrderSchema,
  date: SortOrderSchema,
  userId: SortOrderSchema
}