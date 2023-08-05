import Joi from 'joi';
import { MessageWhereInputSchemaObject, MessageOrderByWithRelationInputSchemaObject, MessageWhereUniqueInputSchemaObject } from './objects';
import { MessageScalarFieldEnumSchema } from './enums'

export const MessageFindManySchema = Joi.object().keys({ where: Joi.object().keys(MessageWhereInputSchemaObject), orderBy: Joi.object().keys(MessageOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(MessageWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(MessageScalarFieldEnumSchema)  }).required()