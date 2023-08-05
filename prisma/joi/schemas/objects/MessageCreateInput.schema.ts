// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutMessageInputSchemaObject } from './UserCreateNestedOneWithoutMessageInput.schema'

export const MessageCreateInputSchemaObject = {
    id: Joi.string(),
  messageId: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  sender: Joi.string().required(),
  isRead: Joi.boolean(),
  date: Joi.date(),
  user: Joi.object().keys(UserCreateNestedOneWithoutMessageInputSchemaObject)
}