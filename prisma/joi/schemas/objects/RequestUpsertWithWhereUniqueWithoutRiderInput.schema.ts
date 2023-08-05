// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithoutRiderInputSchemaObject } from './RequestUpdateWithoutRiderInput.schema';
import { RequestUncheckedUpdateWithoutRiderInputSchemaObject } from './RequestUncheckedUpdateWithoutRiderInput.schema';
import { RequestCreateWithoutRiderInputSchemaObject } from './RequestCreateWithoutRiderInput.schema';
import { RequestUncheckedCreateWithoutRiderInputSchemaObject } from './RequestUncheckedCreateWithoutRiderInput.schema'

export const RequestUpsertWithWhereUniqueWithoutRiderInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithoutRiderInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateWithoutRiderInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutRiderInputSchemaObject),
Joi.object().keys(RequestUncheckedCreateWithoutRiderInputSchemaObject))
}