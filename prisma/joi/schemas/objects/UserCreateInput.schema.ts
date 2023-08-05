// @ts-nocheck
import Joi from 'joi';
import { RequestCreateNestedManyWithoutUserInputSchemaObject } from './RequestCreateNestedManyWithoutUserInput.schema';
import { RequestCreateNestedManyWithoutDriverInputSchemaObject } from './RequestCreateNestedManyWithoutDriverInput.schema';
import { RequestCreateNestedManyWithoutRiderInputSchemaObject } from './RequestCreateNestedManyWithoutRiderInput.schema';
import { MessageCreateNestedManyWithoutUserInputSchemaObject } from './MessageCreateNestedManyWithoutUserInput.schema'

export const UserCreateInputSchemaObject = {
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
  requestR: Joi.object().keys(RequestCreateNestedManyWithoutRiderInputSchemaObject),
  message: Joi.object().keys(MessageCreateNestedManyWithoutUserInputSchemaObject)
}