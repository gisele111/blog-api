import { Request,Response } from 'express';
import createBlog from '../services/blog';


const createController = async (req:Request,res:Response)=>{
    console.log(req.body);
    const {title,content} = req.body;
    try {
    const data =  await createBlog(title,content);
    res.status(201).json({message:'data sent succusfully',data})
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default createController

