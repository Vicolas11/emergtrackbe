// @ts-nocheck
import Joi from 'joi';
import { RequestUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './RequestUncheckedCreateNestedManyWithoutUserInput.schema';
import { RequestUncheckedCreateNestedManyWithoutDriverInputSchemaObject } from './RequestUncheckedCreateNestedManyWithoutDriverInput.schema';
import { RequestUncheckedCreateNestedManyWithoutRiderInputSchemaObject } from './RequestUncheckedCreateNestedManyWithoutRiderInput.schema';
import { MessageUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './MessageUncheckedCreateNestedManyWithoutUserInput.schema'

export const UserUncheckedCreateInputSchemaObject = {
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
  request: Joi.object().keys(RequestUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  requestD: Joi.object().keys(RequestUncheckedCreateNestedManyWithoutDriverInputSchemaObject),
  requestR: Joi.object().keys(RequestUncheckedCreateNestedManyWithoutRiderInputSchemaObject),
  message: Joi.object().keys(MessageUncheckedCreateNestedManyWithoutUserInputSchemaObject)
}