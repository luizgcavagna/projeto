import { Router } from "express";
import { ServiceProvidersController } from "../controllers/service_providers-controller.js";

const serviceProvidersRoutes = Router();
const serviceProvidersController = new ServiceProvidersController();

serviceProvidersRoutes.get('/:city_id/:category_id', serviceProvidersController.index);
serviceProvidersRoutes.get('/:id', serviceProvidersController.show);

export { serviceProvidersRoutes }