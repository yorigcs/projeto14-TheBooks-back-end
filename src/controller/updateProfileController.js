import mongoDB from "../database/mongoDB.js";

const updateProfileController = async (req, res) => {
    const { updateData } = res.locals;

    try {
        await mongoDB
            .collection('users')
            .updateOne({ email: updateData.email }, { $set: { password: updateData.password } })
        res.sendStatus(201)
    } catch (err) {
        console.error(err);
        return res.status(500).send("Houve um erro ao trocar a senha!")
    }
}

export default updateProfileController;