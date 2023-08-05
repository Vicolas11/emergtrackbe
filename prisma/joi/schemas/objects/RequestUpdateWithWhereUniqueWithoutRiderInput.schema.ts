// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithoutRiderInputSchemaObject } from './RequestUpdateWithoutRiderInput.schema';
import { RequestUncheckedUpdateWithoutRiderInputSchemaObject } from './RequestUncheckedUpdateWithoutRiderInput.schema'

export const RequestUpdateWithWhereUniqueWithoutRiderInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithoutRiderInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateWithoutRiderInputSchemaObject))
}