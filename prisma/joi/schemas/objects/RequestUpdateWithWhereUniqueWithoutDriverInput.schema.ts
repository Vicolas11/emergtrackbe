// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithoutDriverInputSchemaObject } from './RequestUpdateWithoutDriverInput.schema';
import { RequestUncheckedUpdateWithoutDriverInputSchemaObject } from './RequestUncheckedUpdateWithoutDriverInput.schema'

export const RequestUpdateWithWhereUniqueWithoutDriverInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithoutDriverInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateWithoutDriverInputSchemaObject))
}