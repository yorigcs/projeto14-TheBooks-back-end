import mongoDB from "../database/mongoDB.js";

const signUpController = async (req, res) => {
    const { signUpData } = res.locals;

    try {
        await mongoDB.collection('users').inserOne(signUpData);
        res.send(201);

    } catch (err) {
        console.error(err);
    }

}

export default signUpController;