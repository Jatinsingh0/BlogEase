import prisma from "@/app/utils/connect"
import { NextResponse } from "next/server";

export const GET = async() => {
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories, {status: 200}))
    } catch (error) {
        return new NextResponse(JSON.stringify("Failed to GET categories", {status: 500})) 
    }
}
