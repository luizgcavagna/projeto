import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
import { db } from "../database/knex.js";
import { z } from "zod";

class ServiceProvidersController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const city_id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "state_id must be a number"})
        .parse(request.params.city_id);
      
      const category_id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "state_id must be a number"})
        .parse(request.params.category_id);

      const service_providers = await db('service_providers')
        .select('service_providers.*', 'categories.name as categorie', 'cities.name as city' )
        .join('categories', 'service_providers.category_id', 'categories.id')
        .join('cities', 'service_providers.city_id', 'cities.id')
        .where('service_providers.city_id', city_id)
        .where('service_providers.category_id', category_id)
        .whereNull("deleted_at");


      response.json(service_providers);
    } catch (error) {
      next(error);
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "state_id must be a number"})
        .parse(request.params.id);

      const service_provider = await db("service_providers").where({ id });
      
      response.json(service_provider);
    } catch (error) {
      next(error);
    }
  }
}

export { ServiceProvidersController }