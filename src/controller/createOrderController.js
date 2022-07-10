import mongoDB from "../database/mongoDB.js";
const createOrderController = async (req, res, next) => {
    const { dataOrder } = res.locals;
    try {
        await mongoDB.collection("orders").insertOne(dataOrder);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Houve um erro ao fazer o pedido!")
    }
}
export default createOrderController;