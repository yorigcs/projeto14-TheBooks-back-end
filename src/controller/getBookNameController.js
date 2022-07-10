import mongoDB from "../database/mongoDB.js";

const getBookNameController = async (req, res) => {
    const { name } = req.params;
    try {
        const books = await mongoDB.collection('books').find({name: {$regex: name}}).toArray();
        res.send(books);

    } catch (err) {
        console.error(err);
        return res.status(500).send("Houve um erro encontrar o livro!")
    }
}


export default getBookNameController;