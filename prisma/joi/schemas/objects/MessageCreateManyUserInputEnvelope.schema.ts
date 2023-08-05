// @ts-nocheck
import Joi from 'joi';
import { MessageCreateManyUserInputSchemaObject } from './MessageCreateManyUserInput.schema'

export const MessageCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(MessageCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(MessageCreateManyUserInputSchemaObject)))
}