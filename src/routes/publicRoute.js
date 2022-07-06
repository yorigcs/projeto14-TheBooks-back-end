import { Router } from "express";
import getBooksController from "../controller/getBooksController.js";
import getMostRatedBooksController from "../controller/getMostRatedBooksController.js";

const routes = Router();

routes.get("/books",getBooksController)
routes.get("/mostRatedBooks", getMostRatedBooksController)

export default routes;