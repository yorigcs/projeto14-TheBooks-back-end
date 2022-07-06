import mongoDB from '../database/mongoDB.js';

const getMostRatedBooksController = async (req, res) => {
  const { numBooks } = req.query;

  try {
    const mostAvaliatedBooks = await mongoDB
      .collection('books')
      .find()
      .sort({ rate: -1 })
      .toArray();

    if (numBooks) {
      const mostAvaliatedBooksLimited = mostAvaliatedBooks.slice(0, numBooks);
      return res.send(mostAvaliatedBooksLimited)
    }
    
    return res.send(mostAvaliatedBooks);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export default getMostRatedBooksController;
