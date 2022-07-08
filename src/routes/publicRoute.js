import { Router } from "express";
import getBooksController from "../controller/getBooksController.js";
import getMostRatedBooksController from "../controller/getMostRatedBooksController.js";
import getBestSellersController from "../controller/getBestSellersController.js";
import getBookController from "../controller/getBookController.js";
import validateSignUp from "../middlewares/publicMiddlewares/validateSignUp.js";
import signUpController from "../controller/signUpController.js";

const routes = Router();

routes.get("/books",getBooksController)
routes.get("/book/:id", getBookController)
routes.get("/books", getBooksController)
routes.get("/mostRatedBooks", getMostRatedBooksController)
routes.get("/bestSellersBooks", getBestSellersController)
routes.post("/sign-up", validateSignUp,signUpController)

export default routes;