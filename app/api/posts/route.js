import prisma from "@/app/utils/connect"
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";

export const GET = async(req) => {
    const {searchParams} = new URL(req.url);
    const page = searchParams.get("page");
    const cat = searchParams.get("cat");

    const postPerPage = 2;
    const query = {
        take: postPerPage,
        skip: postPerPage * (page - 1),
        where:{
            ...(cat && {catSlug: cat}),
        },
    }
    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where: query.where})
        ]);
        return new NextResponse(JSON.stringify({posts, count}, {status: 200}))
    } catch (error) {
        return new NextResponse(JSON.stringify("Failed to GET posts", {status: 500})) 
    }
}

export const POST = async (req) => {
    const session = await getAuthSession();
    if(!session){
      throw new Error("You are not Authenticated.")
    }
    try{
        const body = await req.json();
        const post = await prisma.post.create({
          data: {...body, userEmail: session.user.email},
        });
        return new NextResponse(JSON.stringify(post, {status: 200})) 
    }catch (error) {
        return new NextResponse(JSON.stringify("Failed to GET singlePost", {status: 500})) 
    }
  }