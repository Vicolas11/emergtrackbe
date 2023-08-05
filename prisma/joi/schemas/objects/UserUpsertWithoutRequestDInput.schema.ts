// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutRequestDInputSchemaObject } from './UserUpdateWithoutRequestDInput.schema';
import { UserUncheckedUpdateWithoutRequestDInputSchemaObject } from './UserUncheckedUpdateWithoutRequestDInput.schema';
import { UserCreateWithoutRequestDInputSchemaObject } from './UserCreateWithoutRequestDInput.schema';
import { UserUncheckedCreateWithoutRequestDInputSchemaObject } from './UserUncheckedCreateWithoutRequestDInput.schema'

export const UserUpsertWithoutRequestDInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutRequestDInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutRequestDInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestDInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestDInputSchemaObject))
}