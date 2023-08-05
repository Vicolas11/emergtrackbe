// @ts-nocheck
import Joi from 'joi';
import { RequestCreateWithoutRiderInputSchemaObject } from './RequestCreateWithoutRiderInput.schema';
import { RequestUncheckedCreateWithoutRiderInputSchemaObject } from './RequestUncheckedCreateWithoutRiderInput.schema';
import { RequestCreateOrConnectWithoutRiderInputSchemaObject } from './RequestCreateOrConnectWithoutRiderInput.schema';
import { RequestUpsertWithWhereUniqueWithoutRiderInputSchemaObject } from './RequestUpsertWithWhereUniqueWithoutRiderInput.schema';
import { RequestCreateManyRiderInputEnvelopeSchemaObject } from './RequestCreateManyRiderInputEnvelope.schema';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithWhereUniqueWithoutRiderInputSchemaObject } from './RequestUpdateWithWhereUniqueWithoutRiderInput.schema';
import { RequestUpdateManyWithWhereWithoutRiderInputSchemaObject } from './RequestUpdateManyWithWhereWithoutRiderInput.schema';
import { RequestScalarWhereInputSchemaObject } from './RequestScalarWhereInput.schema'

export const RequestUncheckedUpdateManyWithoutRiderNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutRiderInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateWithoutRiderInputSchemaObject)),
Joi.object().keys(RequestUncheckedCreateWithoutRiderInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUncheckedCreateWithoutRiderInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RequestCreateOrConnectWithoutRiderInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateOrConnectWithoutRiderInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(RequestUpsertWithWhereUniqueWithoutRiderInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpsertWithWhereUniqueWithoutRiderInputSchemaObject))),
  createMany: Joi.object().keys(RequestCreateManyRiderInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithWhereUniqueWithoutRiderInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpdateWithWhereUniqueWithoutRiderInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(RequestUpdateManyWithWhereWithoutRiderInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpdateManyWithWhereWithoutRiderInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(RequestScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestScalarWhereInputSchemaObject)))
}