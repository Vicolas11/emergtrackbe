// @ts-nocheck
import Joi from 'joi';


export const MessageCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  messageId: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  sender: Joi.string().required(),
  isRead: Joi.boolean(),
  date: Joi.date()
}