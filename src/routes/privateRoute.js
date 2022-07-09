import { Router } from "express";
import updateProfileController from "../controller/updateProfileController.js";
import validateJwtToken from "../middlewares/privateMiddlewares/validateJwtToken.js";
import validateUpdateProfille from "../middlewares/privateMiddlewares/validateUpdateProfille.js";

const router = Router();
router.put("/updateProfile",validateJwtToken, validateUpdateProfille, updateProfileController);


export default router;