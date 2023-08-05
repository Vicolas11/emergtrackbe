// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutMessageInputSchemaObject } from './UserUpdateWithoutMessageInput.schema';
import { UserUncheckedUpdateWithoutMessageInputSchemaObject } from './UserUncheckedUpdateWithoutMessageInput.schema';
import { UserCreateWithoutMessageInputSchemaObject } from './UserCreateWithoutMessageInput.schema';
import { UserUncheckedCreateWithoutMessageInputSchemaObject } from './UserUncheckedCreateWithoutMessageInput.schema'

export const UserUpsertWithoutMessageInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutMessageInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutMessageInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutMessageInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutMessageInputSchemaObject))
}