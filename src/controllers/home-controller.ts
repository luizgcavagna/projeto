import { NextFunction, Request, Response } from "express";

class HomeController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      response.json("Hello world")
    } catch (error) {
      next(error);
    }
  }
}

export { HomeController}