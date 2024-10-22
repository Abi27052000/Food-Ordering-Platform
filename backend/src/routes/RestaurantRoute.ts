import express, { Request, Response } from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get(
    "/search/:city",
    param("city")
      .isString()
      .trim()
      .notEmpty()
      .withMessage("City paramenter must be a valid string"),
      (req:Request, res:Response) => {
        RestaurantController.searchRestaurant(req, res);
    }
    
  );
  
  export default router;