// @ts-nocheck
import Joi from 'joi';
import { RequestCreateManyRiderInputSchemaObject } from './RequestCreateManyRiderInput.schema'

export const RequestCreateManyRiderInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(RequestCreateManyRiderInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateManyRiderInputSchemaObject)))
}