import { Router } from "express";
import getBooksController from "../controller/getBooksController.js";
import getMostRatedBooksController from "../controller/getMostRatedBooksController.js";
import getBestSellersController from "../controller/getBestSellersController.js";
import getBookController from "../controller/getBookController.js";

const routes = Router();

routes.get("/books",getBooksController)
routes.get("/book/:id", getBookController)
routes.get("/mostRatedBooks", getMostRatedBooksController)
routes.get("/bestSellersBooks", getBestSellersController)

export default routes;