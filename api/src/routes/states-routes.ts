import { Router } from "express";
import { StatesController } from "../controllers/states-controller.js";

const statesRoutes = Router();
const statesController = new StatesController();

statesRoutes.get('/', statesController.index);

export { statesRoutes }