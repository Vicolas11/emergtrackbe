// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRequestRInputSchemaObject } from './UserCreateWithoutRequestRInput.schema';
import { UserUncheckedCreateWithoutRequestRInputSchemaObject } from './UserUncheckedCreateWithoutRequestRInput.schema'

export const UserCreateOrConnectWithoutRequestRInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestRInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestRInputSchemaObject))
}