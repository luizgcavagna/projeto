import { Router } from "express";
import { statesRoutes } from "./states-routes.js";
import { citiesRoutes } from "./cities-routes.js";
import { categoriesRoutes } from "./categories-routes.js";
import { serviceProvidersRoutes } from "./service_providers-routes.js";

const routes = Router();

routes.use("/states", statesRoutes);
routes.use("/cities", citiesRoutes);
routes.use("/categories", categoriesRoutes);
routes.use("/service-providers", serviceProvidersRoutes);

export { routes };