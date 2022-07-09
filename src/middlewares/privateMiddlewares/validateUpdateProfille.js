import bcrypt from "bcrypt";
import mongoDB from "../../database/mongoDB.js";
import { updateProfileSchema } from "../../schemas/schema.js";

const validateUpdateProfille = async (req, res, next) => {
    const { newPassword, oldPassword, email } = req.body;

    if (updateProfileSchema.validate({ newPassword, oldPassword, email }).error) {
        return res.status(422).send("Todos os dados devem ser preenchidos!")
    }
    try {
        const user = await mongoDB.collection("users").findOne({ email });
        if (!bcrypt.compareSync(oldPassword, user.password)) {
            return res.status(422).send("A senha atual está incorreta!")
        }
        const hashPw = bcrypt.hashSync(newPassword,10);
        res.locals.updateData = { email, password: hashPw};
        next();

    } catch (err) {
        console.log(err)
        return res.status(500).send("Houve um erro ao acessar o servidor!")
    }

}

export default validateUpdateProfille;