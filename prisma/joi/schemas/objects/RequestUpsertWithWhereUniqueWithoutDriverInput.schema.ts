// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithoutDriverInputSchemaObject } from './RequestUpdateWithoutDriverInput.schema';
import { RequestUncheckedUpdateWithoutDriverInputSchemaObject } from './RequestUncheckedUpdateWithoutDriverInput.schema';
import { RequestCreateWithoutDriverInputSchemaObject } from './RequestCreateWithoutDriverInput.schema';
import { RequestUncheckedCreateWithoutDriverInputSchemaObject } from './RequestUncheckedCreateWithoutDriverInput.schema'

export const RequestUpsertWithWhereUniqueWithoutDriverInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithoutDriverInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateWithoutDriverInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutDriverInputSchemaObject),
Joi.object().keys(RequestUncheckedCreateWithoutDriverInputSchemaObject))
}