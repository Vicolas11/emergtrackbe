// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutRequestInputSchemaObject } from './UserUpdateWithoutRequestInput.schema';
import { UserUncheckedUpdateWithoutRequestInputSchemaObject } from './UserUncheckedUpdateWithoutRequestInput.schema';
import { UserCreateWithoutRequestInputSchemaObject } from './UserCreateWithoutRequestInput.schema';
import { UserUncheckedCreateWithoutRequestInputSchemaObject } from './UserUncheckedCreateWithoutRequestInput.schema'

export const UserUpsertWithoutRequestInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutRequestInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutRequestInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestInputSchemaObject))
}