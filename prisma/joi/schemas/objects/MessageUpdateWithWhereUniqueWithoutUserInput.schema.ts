// @ts-nocheck
import Joi from 'joi';
import { MessageWhereUniqueInputSchemaObject } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutUserInputSchemaObject } from './MessageUpdateWithoutUserInput.schema';
import { MessageUncheckedUpdateWithoutUserInputSchemaObject } from './MessageUncheckedUpdateWithoutUserInput.schema'

export const MessageUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(MessageWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(MessageUpdateWithoutUserInputSchemaObject),
Joi.object().keys(MessageUncheckedUpdateWithoutUserInputSchemaObject))
}