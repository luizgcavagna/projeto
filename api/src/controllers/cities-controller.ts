import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
import { db } from "../database/knex.js";
import { z } from "zod";

class CitiesController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      
      const state_id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "state_id must be a number"})
        .parse(request.params.state_id);

      const cities = await db("cities").where({ state_id }).select().orderBy("name");

      response.json(cities);
    } catch (error) {
      next(error);
    }
  }

}

export { CitiesController }