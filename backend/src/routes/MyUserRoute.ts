import express, { NextFunction, Request, Response } from 'express';
import MyUserController from '../controllers/MyUserController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyUserRequest } from '../middleware/validation';

const router = express.Router();

router.post("/",jwtCheck, (req, res) => {
    MyUserController.createCurrentUser(req, res);
});

// router.put("/",
//      jwtCheck,
//      (req:Request,res:Response,next:NextFunction)=>{jwtParse(req,res,next)},
//      validateMyUserRequest, 
//      (req, res) => {
//     MyUserController.updateCurrentUser(req, res);
// });

router.put(
    "/",
    jwtCheck,
    (req: Request, res: Response, next: NextFunction) => { jwtParse(req, res, next); },
    ...validateMyUserRequest as express.RequestHandler[],  // Explicit type assertion
    (req: Request, res: Response) => {
        MyUserController.updateCurrentUser(req, res);
    }
);

export default router;