// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const UserMinOrderByAggregateInputSchemaObject = {
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
  createAt: SortOrderSchema
}