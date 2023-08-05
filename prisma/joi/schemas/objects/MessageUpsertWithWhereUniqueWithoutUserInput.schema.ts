// @ts-nocheck
import Joi from 'joi';
import { MessageWhereUniqueInputSchemaObject } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutUserInputSchemaObject } from './MessageUpdateWithoutUserInput.schema';
import { MessageUncheckedUpdateWithoutUserInputSchemaObject } from './MessageUncheckedUpdateWithoutUserInput.schema';
import { MessageCreateWithoutUserInputSchemaObject } from './MessageCreateWithoutUserInput.schema';
import { MessageUncheckedCreateWithoutUserInputSchemaObject } from './MessageUncheckedCreateWithoutUserInput.schema'

export const MessageUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(MessageWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(MessageUpdateWithoutUserInputSchemaObject),
Joi.object().keys(MessageUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(MessageCreateWithoutUserInputSchemaObject),
Joi.object().keys(MessageUncheckedCreateWithoutUserInputSchemaObject))
}