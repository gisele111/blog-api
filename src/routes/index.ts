import express from 'express';
import {createController,getData,single, updateData} from "../controllers/blog.controller";

const router = express.Router();


router.post('/create',createController);
router.get('/get',getData);
router.get('/get/:id',single);
router.patch('/update/:id',updateData);


export default router;