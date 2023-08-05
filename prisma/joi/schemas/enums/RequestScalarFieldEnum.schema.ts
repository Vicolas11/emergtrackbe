import Joi from 'joi';

export const RequestScalarFieldEnumSchema = Joi.string().valid(...["id","plate_num","brand","vin","color","location","info","isRead","status","date","userId","driverId","riderId"])