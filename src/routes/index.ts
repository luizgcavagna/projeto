import { Router } from "express";
import { statesRoutes } from "./states-routes.js";
import { citiesRoutes } from "./cities-routes.js";

const routes = Router();

routes.use("/states", statesRoutes);
routes.use("/cities", citiesRoutes);

export { routes };