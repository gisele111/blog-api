import { PrismaClient } from '@prisma/client'
import { connect } from 'http2';
import { title } from 'process';
const prisma = new PrismaClient()

interface typeBody {
    title:string,
    content:string
}
const createBlog = async (title:string,content:string)=>{
    const createdData = await prisma.blog.create({
        data:{
            title,
            content
        }
    });
    return createdData
}

const getAll = async()=>{
    const allData = await prisma.blog.findMany();
    return allData;
}

const getSingleBlog = async(singleId:number)=>{
const singleBlog = await prisma.blog.findUnique({
    where:{id:singleId}
});
return singleBlog
}
const updateSingleBlog = async(singleId:number,body:typeBody)=>{
 const updatedData = await prisma.blog.update({
    where:{id:singleId},
    data:body
 });
 return updatedData;
}
export {
    createBlog,
    getAll,
    getSingleBlog,
    updateSingleBlog
};