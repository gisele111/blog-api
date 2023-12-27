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

export {
    createBlog,
    getAll,
    getSingleBlog
};