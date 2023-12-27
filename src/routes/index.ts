import express from 'express';
import {createController,getData} from "../controllers/blog.controller";

const router = express.Router();


router.post('/create',createController);
router.get('/get',getData);


export default router;