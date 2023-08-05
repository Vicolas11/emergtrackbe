// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const MessageOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  messageId: SortOrderSchema,
  title: SortOrderSchema,
  content: SortOrderSchema,
  sender: SortOrderSchema,
  isRead: SortOrderSchema,
  date: SortOrderSchema,
  userId: SortOrderSchema,
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}