import express from 'express';
import createController from "../controllers/blog.controller";

const router = express.Router();


router.post('/create',createController);


export default router;