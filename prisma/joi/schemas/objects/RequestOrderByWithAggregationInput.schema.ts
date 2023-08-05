// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RequestCountOrderByAggregateInputSchemaObject } from './RequestCountOrderByAggregateInput.schema';
import { RequestMaxOrderByAggregateInputSchemaObject } from './RequestMaxOrderByAggregateInput.schema';
import { RequestMinOrderByAggregateInputSchemaObject } from './RequestMinOrderByAggregateInput.schema'

export const RequestOrderByWithAggregationInputSchemaObject = {
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
  _count: Joi.object().keys(RequestCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(RequestMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(RequestMinOrderByAggregateInputSchemaObject)
}