import joi from 'joi';

const signUpSchema = joi.object({
    name: joi.string().required(),
    password: joi.string().required(),
    cpf: joi.string().required(),
    email: joi.email().required(),
});

export {signUpSchema}