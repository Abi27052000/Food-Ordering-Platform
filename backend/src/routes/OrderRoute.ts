import express, { NextFunction, Request, Response, } from 'express';import multer from "multer";

import { jwtCheck, jwtParse } from "../middleware/auth";
import OrderController from "../controllers/OrderController";

const router = express.Router();

router.get("/", jwtCheck, 
  (req: Request, res: Response, next: NextFunction) => { jwtParse(req, res, next); }, 
  OrderController.getMyOrders
);



router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  (req: Request, res: Response, next: NextFunction) => { jwtParse(req, res, next); },
  (req: Request, res: Response) => {
    OrderController.createCheckoutSession(req, res);
}
);

router.post("/checkout/webhook", 
  
  (req: Request, res: Response) => {
    OrderController.stripeWebhookHandler(req, res);
}
);



export default router;