// @ts-nocheck
import Joi from 'joi';
import { RequestCreateWithoutRiderInputSchemaObject } from './RequestCreateWithoutRiderInput.schema';
import { RequestUncheckedCreateWithoutRiderInputSchemaObject } from './RequestUncheckedCreateWithoutRiderInput.schema';
import { RequestCreateOrConnectWithoutRiderInputSchemaObject } from './RequestCreateOrConnectWithoutRiderInput.schema';
import { RequestCreateManyRiderInputEnvelopeSchemaObject } from './RequestCreateManyRiderInputEnvelope.schema';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema'

export const RequestCreateNestedManyWithoutRiderInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutRiderInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateWithoutRiderInputSchemaObject)),
Joi.object().keys(RequestUncheckedCreateWithoutRiderInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUncheckedCreateWithoutRiderInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RequestCreateOrConnectWithoutRiderInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateOrConnectWithoutRiderInputSchemaObject))),
  createMany: Joi.object().keys(RequestCreateManyRiderInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject)))
}