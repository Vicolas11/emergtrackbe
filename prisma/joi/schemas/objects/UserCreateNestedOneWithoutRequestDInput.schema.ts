// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutRequestDInputSchemaObject } from './UserCreateWithoutRequestDInput.schema';
import { UserUncheckedCreateWithoutRequestDInputSchemaObject } from './UserUncheckedCreateWithoutRequestDInput.schema';
import { UserCreateOrConnectWithoutRequestDInputSchemaObject } from './UserCreateOrConnectWithoutRequestDInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutRequestDInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestDInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestDInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutRequestDInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}