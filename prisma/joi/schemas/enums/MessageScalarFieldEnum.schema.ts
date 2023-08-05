import Joi from 'joi';

export const MessageScalarFieldEnumSchema = Joi.string().valid(...["id","messageId","title","content","sender","isRead","date","userId"])