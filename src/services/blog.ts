import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createBlog = async (title:string,content:string)=>{
    const createdData = await prisma.blog.create({
        data:{
            title,
            content
        }
    });
    return createdData
}

// const getAll 

const getAll = async()=>{
    const allData = await prisma.blog.findMany();
    return allData;
}

export {
    createBlog,
    getAll
};