// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutRequestRInputSchemaObject } from './UserUpdateWithoutRequestRInput.schema';
import { UserUncheckedUpdateWithoutRequestRInputSchemaObject } from './UserUncheckedUpdateWithoutRequestRInput.schema';
import { UserCreateWithoutRequestRInputSchemaObject } from './UserCreateWithoutRequestRInput.schema';
import { UserUncheckedCreateWithoutRequestRInputSchemaObject } from './UserUncheckedCreateWithoutRequestRInput.schema'

export const UserUpsertWithoutRequestRInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutRequestRInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutRequestRInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestRInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestRInputSchemaObject))
}