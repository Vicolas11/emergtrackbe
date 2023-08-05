// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutMessageInputSchemaObject } from './UserCreateWithoutMessageInput.schema';
import { UserUncheckedCreateWithoutMessageInputSchemaObject } from './UserUncheckedCreateWithoutMessageInput.schema'

export const UserCreateOrConnectWithoutMessageInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutMessageInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutMessageInputSchemaObject))
}