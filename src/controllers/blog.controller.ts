import { Request,Response } from 'express';
import {createBlog,getAll} from '../services/blog';

const createController = async (req:Request,res:Response)=>{
    const {title,content} = req.body;
    try {
    const data =  await createBlog(title,content);
    res.status(201).json({message:'data sent succusfully',data})
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
}
const getData = async(req:Request,res:Response)=>{
    const allData  = await getAll();
    res.status(200).json({data:allData});
}

export {
    createController,
    getData
}
