// @ts-nocheck
import Joi from 'joi';
import { RequestCreateWithoutDriverInputSchemaObject } from './RequestCreateWithoutDriverInput.schema';
import { RequestUncheckedCreateWithoutDriverInputSchemaObject } from './RequestUncheckedCreateWithoutDriverInput.schema';
import { RequestCreateOrConnectWithoutDriverInputSchemaObject } from './RequestCreateOrConnectWithoutDriverInput.schema';
import { RequestUpsertWithWhereUniqueWithoutDriverInputSchemaObject } from './RequestUpsertWithWhereUniqueWithoutDriverInput.schema';
import { RequestCreateManyDriverInputEnvelopeSchemaObject } from './RequestCreateManyDriverInputEnvelope.schema';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithWhereUniqueWithoutDriverInputSchemaObject } from './RequestUpdateWithWhereUniqueWithoutDriverInput.schema';
import { RequestUpdateManyWithWhereWithoutDriverInputSchemaObject } from './RequestUpdateManyWithWhereWithoutDriverInput.schema';
import { RequestScalarWhereInputSchemaObject } from './RequestScalarWhereInput.schema'

export const RequestUncheckedUpdateManyWithoutDriverNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateWithoutDriverInputSchemaObject)),
Joi.object().keys(RequestUncheckedCreateWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUncheckedCreateWithoutDriverInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RequestCreateOrConnectWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateOrConnectWithoutDriverInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(RequestUpsertWithWhereUniqueWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpsertWithWhereUniqueWithoutDriverInputSchemaObject))),
  createMany: Joi.object().keys(RequestCreateManyDriverInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithWhereUniqueWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpdateWithWhereUniqueWithoutDriverInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(RequestUpdateManyWithWhereWithoutDriverInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpdateManyWithWhereWithoutDriverInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(RequestScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestScalarWhereInputSchemaObject)))
}