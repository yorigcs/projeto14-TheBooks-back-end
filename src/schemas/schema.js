import joi from 'joi';

const signUpSchema = joi.object({
    name: joi.string().required(),
    password: joi.string().required(),
    cpf: joi.string().required().length(11).pattern(/^[0-9]*$/ ),
    email: joi.string().email().required(),
});


const updateProfileSchema = joi.object({
    newPassword: joi.string().required(),
    oldPassword: joi.string().required(),
    email: joi.string().email().required(),
});
export {signUpSchema, updateProfileSchema}