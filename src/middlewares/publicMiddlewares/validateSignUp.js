import mongoDB from "../../database/mongoDB.js"
import { signUpSchema } from "../../schemas/schema.js"
const validateSignUp = async (req, res, next) => {
    const { name, password, email, cpf } = req.body;
    if (signUpSchema.validate({name, password, email, cpf}).error) {
        return res.status(422).send("Dados inválidos!")
    }

    try {
        const isRegistered = await mongoDB.collection("users").findOne({ email });
        if (isRegistered) {
            return res.status(400).send("O usuário já existe!");
        }
        res.locals.signUpData = { name, password, email, cpf };
        next();

    } catch (err) {
        console.error(err);
        return res.status(500).send("Houve um erro ao consultar o banco de dados!")

    }

}

export default validateSignUp;