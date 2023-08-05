// @ts-nocheck
import Joi from 'joi';
import { RequestCreateWithoutDriverInputSchemaObject } from './RequestCreateWithoutDriverInput.schema';
import { RequestUncheckedCreateWithoutDriverInputSchemaObject } from './RequestUncheckedCreateWithoutDriverInput.schema';
import { RequestCreateOrConnectWithoutDriverInputSchemaObject } from './RequestCreateOrConnectWithoutDriverInput.schema';
import { RequestCreateManyDriverInputEnvelopeSchemaObject } from './RequestCreateManyDriverInputEnvelope.schema';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema'

export const RequestCreateNestedManyWithoutDriverInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateWithoutDriverInputSchemaObject)),
Joi.object().keys(RequestUncheckedCreateWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUncheckedCreateWithoutDriverInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RequestCreateOrConnectWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateOrConnectWithoutDriverInputSchemaObject))),
  createMany: Joi.object().keys(RequestCreateManyDriverInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject)))
}