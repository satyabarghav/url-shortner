import {PrismaClient} from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(request, {params}){
    const {shortUrl} = params;
    const urlDetails = await prisma.url.findFirst({
        where:{
            shortUrl: shortUrl
        }
    })
    return NextResponse.json(urlDetails, {status: 201})
}