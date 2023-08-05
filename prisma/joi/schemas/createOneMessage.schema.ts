import Joi from 'joi';
import { MessageCreateInputSchemaObject } from './objects'

export const MessageCreateSchema = Joi.object().keys({ data: Joi.object().keys(MessageCreateInputSchemaObject)  }).required()