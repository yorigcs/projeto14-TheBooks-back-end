import { Router } from "express";
import getBooksController from "../controller/getBooksController.js";
const routes = Router();

routes.get("/books",getBooksController)

export default routes;