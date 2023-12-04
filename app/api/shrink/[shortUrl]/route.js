import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const { shortUrl } = params;
    const urlDetails = await prisma.url.findFirst({
      where: {
        shortUrl: shortUrl,
      },
    });

    if (urlDetails) {
      return NextResponse.redirect(urlDetails.fullUrl);
    } else {
      return NextResponse.status(404).send('URL not found');
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.status(500).send('Internal Server Error');
  } 
}