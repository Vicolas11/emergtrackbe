// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutMessageInputSchemaObject } from './UserCreateWithoutMessageInput.schema';
import { UserUncheckedCreateWithoutMessageInputSchemaObject } from './UserUncheckedCreateWithoutMessageInput.schema';
import { UserCreateOrConnectWithoutMessageInputSchemaObject } from './UserCreateOrConnectWithoutMessageInput.schema';
import { UserUpsertWithoutMessageInputSchemaObject } from './UserUpsertWithoutMessageInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutMessageInputSchemaObject } from './UserUpdateWithoutMessageInput.schema';
import { UserUncheckedUpdateWithoutMessageInputSchemaObject } from './UserUncheckedUpdateWithoutMessageInput.schema'

export const UserUpdateOneRequiredWithoutMessageNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutMessageInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutMessageInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutMessageInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutMessageInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutMessageInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutMessageInputSchemaObject))
}