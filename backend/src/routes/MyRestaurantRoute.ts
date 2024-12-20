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

router.get(
  "/order",
  jwtCheck,
  (req: Request, res: Response, next: NextFunction) => { jwtParse(req, res, next); },
  (req, res) => {
    MyRestaurantController.getMyRestaurantOrders(req, res);
}
);

router.patch(
  "/order/:orderId/status",
  jwtCheck,
  (req: Request, res: Response, next: NextFunction) => { jwtParse(req, res, next); },
  
  (req, res) => {
    MyRestaurantController.updateOrderStatus(req, res);
}
);




//  /api/my/restaurant
router.get("/", jwtCheck, 
  (req: Request, res: Response, next: NextFunction) => { jwtParse(req, res, next); },
  (req, res) => {
    MyRestaurantController.getMyRestaurant(req, res);
}
);



router.post("/",
    upload.single("imageFile"),
    ...validateMyRestaurantRequest as express.RequestHandler[],  // Explicit type assertion

jwtCheck,
(req: Request, res: Response, next: NextFunction) => { jwtParse(req, res, next); },
(req, res) => {
    MyRestaurantController.createMyRestaurant(req, res);
});


router.put(
  "/",
  upload.single("imageFile"),
  ...validateMyRestaurantRequest as express.RequestHandler[],  // Explicit type assertion
  jwtCheck,
  (req: Request, res: Response, next: NextFunction) => { jwtParse(req, res, next); },
  (req, res) => {
    MyRestaurantController.updateMyRestaurant(req, res);
});


export default router;