// @ts-nocheck
import Joi from 'joi';
import { RequestScalarWhereInputSchemaObject } from './RequestScalarWhereInput.schema';
import { RequestUpdateManyMutationInputSchemaObject } from './RequestUpdateManyMutationInput.schema';
import { RequestUncheckedUpdateManyWithoutRequestInputSchemaObject } from './RequestUncheckedUpdateManyWithoutRequestInput.schema'

export const RequestUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(RequestScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RequestUpdateManyMutationInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateManyWithoutRequestInputSchemaObject))
}