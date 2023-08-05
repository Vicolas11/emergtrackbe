// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestCreateWithoutDriverInputSchemaObject } from './RequestCreateWithoutDriverInput.schema';
import { RequestUncheckedCreateWithoutDriverInputSchemaObject } from './RequestUncheckedCreateWithoutDriverInput.schema'

export const RequestCreateOrConnectWithoutDriverInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutDriverInputSchemaObject),
Joi.object().keys(RequestUncheckedCreateWithoutDriverInputSchemaObject))
}