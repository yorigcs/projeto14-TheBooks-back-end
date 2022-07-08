import { ObjectId } from 'mongodb';

import mongoDB from '../database/mongoDB.js';

const getBookController = async (req, res) => {
  const { id } = req.params;

  try {
    const bestSellersBooks = await mongoDB
      .collection('books')
      .findOne({ _id: ObjectId(id) });

    return res.send(bestSellersBooks);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export default getBookController;
