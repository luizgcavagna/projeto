import { Router } from "express";
import { CitiesController } from "../controllers/cities-controller.js";

const citiesRoutes = Router();
const citiesController = new CitiesController();

citiesRoutes.get('/:state_id', citiesController.index);

export { citiesRoutes }