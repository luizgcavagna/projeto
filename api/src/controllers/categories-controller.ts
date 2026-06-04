import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
import { db } from "../database/knex.js";
import { z } from "zod";

class CategoriesController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const city_id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "state_id must be a number"})
        .parse(request.params.city_id);

      const categories = await db('categories')
        .select('categories.*')
        .join('service_providers', 'categories.id', 'service_providers.category_id')
        .where('service_providers.city_id', city_id)
        .distinct();

      response.json(categories);
    } catch (error) {
      next(error);
    }
  }
}

export { CategoriesController }