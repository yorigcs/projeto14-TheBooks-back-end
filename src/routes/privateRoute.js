import { Router } from "express";
import createOrderController from "../controller/createOrderController.js";
import getMyOrdersController from "../controller/getMyOrdersController.js";
import updateProfileController from "../controller/updateProfileController.js";
import validateCreateOrder from "../middlewares/privateMiddlewares/validateCreateOrder.js";
import validateJwtToken from "../middlewares/privateMiddlewares/validateJwtToken.js";
import validateUpdateProfille from "../middlewares/privateMiddlewares/validateUpdateProfille.js";

const router = Router();
router.put("/updateProfile",validateJwtToken, validateUpdateProfille, updateProfileController);
router.post("/orders",validateJwtToken,validateCreateOrder,createOrderController )
router.post("/myOrders",validateJwtToken,getMyOrdersController)

export default router;