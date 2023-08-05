// @ts-nocheck
import Joi from 'joi';
import { RequestUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './RequestUncheckedCreateNestedManyWithoutUserInput.schema';
import { RequestUncheckedCreateNestedManyWithoutRiderInputSchemaObject } from './RequestUncheckedCreateNestedManyWithoutRiderInput.schema';
import { MessageUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './MessageUncheckedCreateNestedManyWithoutUserInput.schema'

export const UserUncheckedCreateWithoutRequestDInputSchemaObject = {
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
  requestR: Joi.object().keys(RequestUncheckedCreateNestedManyWithoutRiderInputSchemaObject),
  message: Joi.object().keys(MessageUncheckedCreateNestedManyWithoutUserInputSchemaObject)
}