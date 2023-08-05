// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutMessageInputSchemaObject } from './UserCreateWithoutMessageInput.schema';
import { UserUncheckedCreateWithoutMessageInputSchemaObject } from './UserUncheckedCreateWithoutMessageInput.schema';
import { UserCreateOrConnectWithoutMessageInputSchemaObject } from './UserCreateOrConnectWithoutMessageInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutMessageInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutMessageInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutMessageInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutMessageInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}