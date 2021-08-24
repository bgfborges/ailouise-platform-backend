import { Router } from 'express';
import { userRouter } from '@modules/users/infra/http/routes/user.routes';

const routes = Router();

// Users Routes
routes.use('/users', userRouter);

export { routes };