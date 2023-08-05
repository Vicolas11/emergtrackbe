// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutRequestInputSchemaObject } from './UserCreateWithoutRequestInput.schema';
import { UserUncheckedCreateWithoutRequestInputSchemaObject } from './UserUncheckedCreateWithoutRequestInput.schema';
import { UserCreateOrConnectWithoutRequestInputSchemaObject } from './UserCreateOrConnectWithoutRequestInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutRequestInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutRequestInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}