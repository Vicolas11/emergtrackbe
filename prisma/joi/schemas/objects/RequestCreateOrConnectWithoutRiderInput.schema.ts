// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestCreateWithoutRiderInputSchemaObject } from './RequestCreateWithoutRiderInput.schema';
import { RequestUncheckedCreateWithoutRiderInputSchemaObject } from './RequestUncheckedCreateWithoutRiderInput.schema'

export const RequestCreateOrConnectWithoutRiderInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutRiderInputSchemaObject),
Joi.object().keys(RequestUncheckedCreateWithoutRiderInputSchemaObject))
}