import { Router } from "express";
import { CategoriesController } from "../controllers/categories-controller.js";

const categoriesRoutes = Router();
const categoriesController = new CategoriesController();

categoriesRoutes.get('/:city_id', categoriesController.index);

export { categoriesRoutes }