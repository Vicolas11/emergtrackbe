import Joi from 'joi';

export const UserScalarFieldEnumSchema = Joi.string().valid(...["id","firstName","lastName","username","userId","email","password","phone","avatar","role","createAt"])