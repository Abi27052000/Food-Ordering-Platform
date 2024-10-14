import express from 'express';
import MyUserController from '../controllers/MyUserController';

const router = express.Router();

router.post("/", (req, res) => {
    MyUserController.createCurrentUser(req, res);
});

export default router;