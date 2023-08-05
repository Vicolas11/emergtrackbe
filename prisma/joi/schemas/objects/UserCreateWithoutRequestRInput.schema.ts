// @ts-nocheck
import Joi from 'joi';
import { RequestCreateNestedManyWithoutUserInputSchemaObject } from './RequestCreateNestedManyWithoutUserInput.schema';
import { RequestCreateNestedManyWithoutDriverInputSchemaObject } from './RequestCreateNestedManyWithoutDriverInput.schema';
import { MessageCreateNestedManyWithoutUserInputSchemaObject } from './MessageCreateNestedManyWithoutUserInput.schema'

export const UserCreateWithoutRequestRInputSchemaObject = {
    id: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  username: Joi.string().required(),
  userId: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  avatar: Joi.string(),
  createAt: Joi.date(),
  request: Joi.object().keys(RequestCreateNestedManyWithoutUserInputSchemaObject),
  requestD: Joi.object().keys(RequestCreateNestedManyWithoutDriverInputSchemaObject),
  message: Joi.object().keys(MessageCreateNestedManyWithoutUserInputSchemaObject)
}