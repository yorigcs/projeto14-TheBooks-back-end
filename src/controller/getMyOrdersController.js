import mongoDB from "../database/mongoDB.js";
const getMyOrdersController = async (req, res) => {
    const { user } = req.body;
    try {
        const myOrders = await mongoDB.collection("orders").find({ user }).toArray();
        res.send(myOrders)

    } catch (err) {
        console.error(err);
        return res.status(500).send("Houve um erro ao consultar!")
    }

}
export default getMyOrdersController;