// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutRequestDInputSchemaObject } from './UserCreateWithoutRequestDInput.schema';
import { UserUncheckedCreateWithoutRequestDInputSchemaObject } from './UserUncheckedCreateWithoutRequestDInput.schema';
import { UserCreateOrConnectWithoutRequestDInputSchemaObject } from './UserCreateOrConnectWithoutRequestDInput.schema';
import { UserUpsertWithoutRequestDInputSchemaObject } from './UserUpsertWithoutRequestDInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutRequestDInputSchemaObject } from './UserUpdateWithoutRequestDInput.schema';
import { UserUncheckedUpdateWithoutRequestDInputSchemaObject } from './UserUncheckedUpdateWithoutRequestDInput.schema'

export const UserUpdateOneWithoutRequestDNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestDInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestDInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutRequestDInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutRequestDInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutRequestDInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutRequestDInputSchemaObject))
}