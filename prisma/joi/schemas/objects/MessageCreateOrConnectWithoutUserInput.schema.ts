// @ts-nocheck
import Joi from 'joi';
import { MessageWhereUniqueInputSchemaObject } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutUserInputSchemaObject } from './MessageCreateWithoutUserInput.schema';
import { MessageUncheckedCreateWithoutUserInputSchemaObject } from './MessageUncheckedCreateWithoutUserInput.schema'

export const MessageCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(MessageWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(MessageCreateWithoutUserInputSchemaObject),
Joi.object().keys(MessageUncheckedCreateWithoutUserInputSchemaObject))
}