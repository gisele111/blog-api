import { Request,Response } from 'express';
import {createBlog,getAll,getSingleBlog, updateSingleBlog} from '../services/blog';

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

const single = async(req:Request,res:Response)=>{
    const {id} = req.params;
    const intId = parseInt(id);
    const blog = await getSingleBlog(intId);
    res.status(200).json({blog:blog});
}

const updateData = async(req:Request,res:Response)=>{
    const {id} = req.params;
    const intId = parseInt(id);
  const updated= await updateSingleBlog(intId,req.body);
  res.status(200).json({status:'sucess',updated})
}

export {
    createController,
    getData,
    single,
    updateData
}

