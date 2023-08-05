// @ts-nocheck
import Joi from 'joi';
import { MessageCreateWithoutUserInputSchemaObject } from './MessageCreateWithoutUserInput.schema';
import { MessageUncheckedCreateWithoutUserInputSchemaObject } from './MessageUncheckedCreateWithoutUserInput.schema';
import { MessageCreateOrConnectWithoutUserInputSchemaObject } from './MessageCreateOrConnectWithoutUserInput.schema';
import { MessageCreateManyUserInputEnvelopeSchemaObject } from './MessageCreateManyUserInputEnvelope.schema';
import { MessageWhereUniqueInputSchemaObject } from './MessageWhereUniqueInput.schema'

export const MessageUncheckedCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(MessageCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageCreateWithoutUserInputSchemaObject)),
Joi.object().keys(MessageUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(MessageCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(MessageCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(MessageWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageWhereUniqueInputSchemaObject)))
}