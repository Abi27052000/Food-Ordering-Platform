import express, { NextFunction, Request, Response } from 'express';import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from '../middleware/validation';



const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});


//  /api/my/restaurant
router.post("/",
    upload.single("imageFile"),
    ...validateMyRestaurantRequest as express.RequestHandler[],  // Explicit type assertion

jwtCheck,
(req: Request, res: Response, next: NextFunction) => { jwtParse(req, res, next); },
(req, res) => {
    MyRestaurantController.createMyRestaurant(req, res);
});

export default router;