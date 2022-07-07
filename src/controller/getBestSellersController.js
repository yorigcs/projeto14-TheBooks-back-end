import mongoDB from '../database/mongoDB.js';

const getBestSellersController = async (req, res) => {
  const { numBooks } = req.query;

  try {
    const bestSellersBooks = await mongoDB
      .collection('books')
      .find()
      .sort({ soldNumber: -1 })
      .toArray();

    if (numBooks) {
      const bestSellersBooksLimited = bestSellersBooks.slice(0, numBooks);
      return res.send(bestSellersBooksLimited)
    }
    
    return res.send(bestSellersBooks);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export default getBestSellersController;
