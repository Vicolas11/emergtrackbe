import Joi from 'joi';
import { MessageUpdateInputSchemaObject, MessageWhereUniqueInputSchemaObject } from './objects'

export const MessageUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(MessageUpdateInputSchemaObject), where: Joi.object().keys(MessageWhereUniqueInputSchemaObject)  }).required()