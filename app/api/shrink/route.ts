import { NextRequest, NextResponse } from "next/server";
import {z} from "zod"
import {PrismaClient} from "@prisma/client"
import { stringify } from "querystring";
const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
    const body = await request.json()
    const full = await prisma.url.create({
        data: {
            fullUrl: body.fullUrl
        },
        select: {
            shortUrl: true
        }
    })
    return NextResponse.json(full, {status:201})
}
