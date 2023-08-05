// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RequestMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  plate_num: SortOrderSchema,
  brand: SortOrderSchema,
  vin: SortOrderSchema,
  color: SortOrderSchema,
  location: SortOrderSchema,
  info: SortOrderSchema,
  isRead: SortOrderSchema,
  status: SortOrderSchema,
  date: SortOrderSchema,
  userId: SortOrderSchema,
  driverId: SortOrderSchema,
  riderId: SortOrderSchema
}