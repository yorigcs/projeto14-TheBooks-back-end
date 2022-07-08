import mongoDB from "../../database/mongoDB.js";
import bcrypt from "bcrypt";

const validateSignIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const isRegistered = await mongoDB.collection("users").findOne({ email });
        if (!isRegistered) {
            return res.status(422).send("O usuário não está registrado, cadastre uma nova conta!")
        }
        const isValidPassword = bcrypt.compareSync(password, isRegistered.password)
        if (!isValidPassword) {
            return res.status(422).send("Senha ou email incorretos!")
        }
        next();
        
        res.locals.userData = { name: isRegistered.name, email };

    } catch (err) {
        console.error(err)
        return res.status(500).send("Houve um problema ao fazer o login, tente novamente mais tarde!")
    }
}

export default validateSignIn;