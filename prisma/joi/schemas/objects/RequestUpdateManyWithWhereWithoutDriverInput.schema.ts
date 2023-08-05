// @ts-nocheck
import Joi from 'joi';
import { RequestScalarWhereInputSchemaObject } from './RequestScalarWhereInput.schema';
import { RequestUpdateManyMutationInputSchemaObject } from './RequestUpdateManyMutationInput.schema';
import { RequestUncheckedUpdateManyWithoutRequestDInputSchemaObject } from './RequestUncheckedUpdateManyWithoutRequestDInput.schema'

export const RequestUpdateManyWithWhereWithoutDriverInputSchemaObject = {
    where: Joi.object().keys(RequestScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RequestUpdateManyMutationInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateManyWithoutRequestDInputSchemaObject))
}