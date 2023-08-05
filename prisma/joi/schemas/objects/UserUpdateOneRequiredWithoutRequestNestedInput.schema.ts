// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutRequestInputSchemaObject } from './UserCreateWithoutRequestInput.schema';
import { UserUncheckedCreateWithoutRequestInputSchemaObject } from './UserUncheckedCreateWithoutRequestInput.schema';
import { UserCreateOrConnectWithoutRequestInputSchemaObject } from './UserCreateOrConnectWithoutRequestInput.schema';
import { UserUpsertWithoutRequestInputSchemaObject } from './UserUpsertWithoutRequestInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutRequestInputSchemaObject } from './UserUpdateWithoutRequestInput.schema';
import { UserUncheckedUpdateWithoutRequestInputSchemaObject } from './UserUncheckedUpdateWithoutRequestInput.schema'

export const UserUpdateOneRequiredWithoutRequestNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutRequestInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutRequestInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutRequestInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutRequestInputSchemaObject))
}