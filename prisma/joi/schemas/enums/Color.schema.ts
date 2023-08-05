import Joi from 'joi';

export const ColorSchema = Joi.string().valid(...["White","Black","Gray","Silver","Blue","Red","Brown","Green","Orange","Beige","Purple","Gold","Yellow"])