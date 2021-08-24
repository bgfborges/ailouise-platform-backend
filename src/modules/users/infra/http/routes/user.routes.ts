import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';

const userRouter = Router();

const createUserController = new CreateUserController;

// Create User
userRouter.post('/create', createUserController.handle);

export { userRouter };