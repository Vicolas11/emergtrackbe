// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const RequestOrderByWithRelationInputSchemaObject = {
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
  riderId: SortOrderSchema,
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  driver: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  rider: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}