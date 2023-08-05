// @ts-nocheck
import Joi from 'joi';
import { MessageScalarWhereInputSchemaObject } from './MessageScalarWhereInput.schema';
import { MessageUpdateManyMutationInputSchemaObject } from './MessageUpdateManyMutationInput.schema';
import { MessageUncheckedUpdateManyWithoutMessageInputSchemaObject } from './MessageUncheckedUpdateManyWithoutMessageInput.schema'

export const MessageUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(MessageScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(MessageUpdateManyMutationInputSchemaObject),
Joi.object().keys(MessageUncheckedUpdateManyWithoutMessageInputSchemaObject))
}