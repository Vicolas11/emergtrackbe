// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRequestInputSchemaObject } from './UserCreateWithoutRequestInput.schema';
import { UserUncheckedCreateWithoutRequestInputSchemaObject } from './UserUncheckedCreateWithoutRequestInput.schema'

export const UserCreateOrConnectWithoutRequestInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestInputSchemaObject))
}