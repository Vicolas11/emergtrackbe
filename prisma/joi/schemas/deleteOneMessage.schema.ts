import Joi from 'joi';
import { MessageWhereUniqueInputSchemaObject } from './objects'

export const MessageDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(MessageWhereUniqueInputSchemaObject)  }).required()