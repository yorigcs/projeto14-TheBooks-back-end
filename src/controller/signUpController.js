import mongoDB from "../database/mongoDB.js";

const signUpController = async (req, res) => {
    const { signUpData } = res.locals;
    try {
        await mongoDB.collection('users').insertOne(signUpData);
        res.sendStatus(201);

    } catch (err) {
        console.error(err);
        return res.status(500).send("Houve um erro ao cadastrar o usuário!")
    }

}

export default signUpController;