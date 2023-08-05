import Joi from 'joi';
import { MessageWhereUniqueInputSchemaObject, MessageCreateInputSchemaObject, MessageUpdateInputSchemaObject } from './objects'

export const MessageUpsertSchema = Joi.object().keys({ where: Joi.object().keys(MessageWhereUniqueInputSchemaObject), data: Joi.object().keys(MessageCreateInputSchemaObject), update: Joi.object().keys(MessageUpdateInputSchemaObject)  }).required()