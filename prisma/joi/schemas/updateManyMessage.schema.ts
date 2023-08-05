import Joi from 'joi';
import { MessageUpdateManyMutationInputSchemaObject, MessageWhereInputSchemaObject } from './objects'

export const MessageUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(MessageUpdateManyMutationInputSchemaObject), where: Joi.object().keys(MessageWhereInputSchemaObject)  }).required()