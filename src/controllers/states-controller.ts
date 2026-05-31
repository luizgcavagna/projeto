import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
import { db } from "../database/knex.js";
import { z } from "zod";

class StatesController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      
      const states = await db("states").select().orderBy("acronym");

      response.json(states);
    } catch (error) {
      next(error);
    }
  }

}

export { StatesController }