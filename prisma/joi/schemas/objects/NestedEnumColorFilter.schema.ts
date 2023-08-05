// @ts-nocheck
import Joi from 'joi';


export const NestedEnumColorFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumColorFilter'))
}