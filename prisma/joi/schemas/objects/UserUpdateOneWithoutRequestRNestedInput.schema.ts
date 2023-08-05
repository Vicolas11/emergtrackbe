// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutRequestRInputSchemaObject } from './UserCreateWithoutRequestRInput.schema';
import { UserUncheckedCreateWithoutRequestRInputSchemaObject } from './UserUncheckedCreateWithoutRequestRInput.schema';
import { UserCreateOrConnectWithoutRequestRInputSchemaObject } from './UserCreateOrConnectWithoutRequestRInput.schema';
import { UserUpsertWithoutRequestRInputSchemaObject } from './UserUpsertWithoutRequestRInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutRequestRInputSchemaObject } from './UserUpdateWithoutRequestRInput.schema';
import { UserUncheckedUpdateWithoutRequestRInputSchemaObject } from './UserUncheckedUpdateWithoutRequestRInput.schema'

export const UserUpdateOneWithoutRequestRNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestRInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestRInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutRequestRInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutRequestRInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutRequestRInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutRequestRInputSchemaObject))
}