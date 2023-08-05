// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutRequestRInputSchemaObject } from './UserCreateWithoutRequestRInput.schema';
import { UserUncheckedCreateWithoutRequestRInputSchemaObject } from './UserUncheckedCreateWithoutRequestRInput.schema';
import { UserCreateOrConnectWithoutRequestRInputSchemaObject } from './UserCreateOrConnectWithoutRequestRInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutRequestRInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestRInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestRInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutRequestRInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}