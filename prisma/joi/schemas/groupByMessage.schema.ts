import Joi from 'joi';
import { MessageWhereInputSchemaObject, MessageOrderByWithAggregationInputSchemaObject, MessageScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { MessageScalarFieldEnumSchema } from './enums'

export const MessageGroupBySchema = Joi.object().keys({ where: Joi.object().keys(MessageWhereInputSchemaObject), orderBy: Joi.object().keys(MessageOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(MessageScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(MessageScalarFieldEnumSchema).required()  }).required()