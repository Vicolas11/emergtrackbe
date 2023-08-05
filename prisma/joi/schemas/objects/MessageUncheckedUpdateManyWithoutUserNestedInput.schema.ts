// @ts-nocheck
import Joi from 'joi';
import { MessageCreateWithoutUserInputSchemaObject } from './MessageCreateWithoutUserInput.schema';
import { MessageUncheckedCreateWithoutUserInputSchemaObject } from './MessageUncheckedCreateWithoutUserInput.schema';
import { MessageCreateOrConnectWithoutUserInputSchemaObject } from './MessageCreateOrConnectWithoutUserInput.schema';
import { MessageUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './MessageUpsertWithWhereUniqueWithoutUserInput.schema';
import { MessageCreateManyUserInputEnvelopeSchemaObject } from './MessageCreateManyUserInputEnvelope.schema';
import { MessageWhereUniqueInputSchemaObject } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './MessageUpdateWithWhereUniqueWithoutUserInput.schema';
import { MessageUpdateManyWithWhereWithoutUserInputSchemaObject } from './MessageUpdateManyWithWhereWithoutUserInput.schema';
import { MessageScalarWhereInputSchemaObject } from './MessageScalarWhereInput.schema'

export const MessageUncheckedUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(MessageCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageCreateWithoutUserInputSchemaObject)),
Joi.object().keys(MessageUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(MessageCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(MessageUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(MessageCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(MessageWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(MessageWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(MessageWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(MessageWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(MessageUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(MessageUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(MessageScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageScalarWhereInputSchemaObject)))
}