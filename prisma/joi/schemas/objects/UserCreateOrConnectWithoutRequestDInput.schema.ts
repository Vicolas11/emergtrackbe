// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRequestDInputSchemaObject } from './UserCreateWithoutRequestDInput.schema';
import { UserUncheckedCreateWithoutRequestDInputSchemaObject } from './UserUncheckedCreateWithoutRequestDInput.schema'

export const UserCreateOrConnectWithoutRequestDInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestDInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestDInputSchemaObject))
}