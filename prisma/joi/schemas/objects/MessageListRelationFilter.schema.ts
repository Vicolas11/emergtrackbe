// @ts-nocheck
import Joi from 'joi';
import { MessageWhereInputSchemaObject } from './MessageWhereInput.schema'

export const MessageListRelationFilterSchemaObject = {
    every: Joi.object().keys(MessageWhereInputSchemaObject),
  some: Joi.object().keys(MessageWhereInputSchemaObject),
  none: Joi.object().keys(MessageWhereInputSchemaObject)
}