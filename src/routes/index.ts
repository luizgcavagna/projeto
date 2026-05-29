import { Router } from "express";
import { HomeController } from "../controllers/home-controller.js";

const routes = Router();
const homeController = new HomeController();

routes.get("/", homeController.index)

export { routes };