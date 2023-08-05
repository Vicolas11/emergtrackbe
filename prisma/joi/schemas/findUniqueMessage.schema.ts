import Joi from 'joi';
import { MessageWhereUniqueInputSchemaObject } from './objects'

export const MessageFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(MessageWhereUniqueInputSchemaObject) }).required()