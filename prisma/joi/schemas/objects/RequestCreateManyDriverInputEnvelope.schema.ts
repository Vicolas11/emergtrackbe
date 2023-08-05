// @ts-nocheck
import Joi from 'joi';
import { RequestCreateManyDriverInputSchemaObject } from './RequestCreateManyDriverInput.schema'

export const RequestCreateManyDriverInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(RequestCreateManyDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateManyDriverInputSchemaObject)))
}