import mongoDB from '../database/mongoDB.js';

const getAllBooksController = async (req, res) => {
  const { numBooks } = req.query;

  try {
    const allBooks = await mongoDB.collection('books').find().toArray();

    if (numBooks) {
      const allBooksLimited = allBooks.slice(0, numBooks);
      return res.send(allBooksLimited);
    }

    return res.send(allBooks);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export default getAllBooksController;
