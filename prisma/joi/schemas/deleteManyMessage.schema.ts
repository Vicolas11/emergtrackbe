import Joi from 'joi';
import { MessageWhereInputSchemaObject } from './objects'

export const MessageDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(MessageWhereInputSchemaObject)  }).required()