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

export default createBlog;