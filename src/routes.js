import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

/*todas rotas abaixo deste middleware precisam estar autentificadas*/
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.put('/tasks/:tasks_id', TaskController.update);
routes.delete('/tasks/:tasks_id', TaskController.delete);

export default routes;
