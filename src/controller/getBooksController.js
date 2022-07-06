import mongoDB from "../database/mongoDB.js";
const getBooksController = async (req, res) => {
    const { numBooks } = req.query;
    if (isNaN(numBooks)) {
        return res.status(400).send("Informe o número de livros!")
    }
    try {
        const lastBokks = await mongoDB
            .collection('books')
            .find()
            .sort({ "addedAt": -1 })
            .limit(Number(numBooks))
            .toArray();
        res.send(lastBokks);

    } catch (error) {
        console.error(error)
        res.sendStatus(500);
    }

}

export default getBooksController;