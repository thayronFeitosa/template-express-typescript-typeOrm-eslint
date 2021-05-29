import { Router, Request, Response } from 'express';

const routes = Router();

routes.use('/', (request: Request, response: Response) => {
  response.status(200).json('Hello word');
});

export { routes };
