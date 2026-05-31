import { Router } from "express";
import { HomeController } from "../controllers/home-controller.js";

const routes = Router();
const homeController = new HomeController();

routes.get("/states", homeController.states);
routes.get("/cities/:state_id", homeController.cities);

export { routes };