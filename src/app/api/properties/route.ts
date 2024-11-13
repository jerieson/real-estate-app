// src/app/api/properties/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      include: {
        features: true,
        images: true,
        // user: {
        //   select: {
        //     name: true,
        //     email: true,
        //   },
        // },
      },
    });

    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session) {
    // 	return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const json = await request.json();
    const {
      title,
      description,
      price,
      location,
      bedrooms,
      bathrooms,
      area,
      features,
      images,
    } = json;

    const property = await prisma.property.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        location,
        bedrooms: parseInt(bedrooms),
        bathrooms: parseInt(bathrooms),
        area: parseFloat(area),
        // userId: session.user.id,
        userId: "cm37hj10a0000b9eqoxj9xou5",
        features: {
          create: features.map((feature: string) => ({
            feature,
          })),
        },
        images: {
          create: images.map((image: { url: string; alt: string }) => ({
            url: image.url,
            alt: image.alt,
          })),
        },
      },
      include: {
        features: true,
        images: true,
      },
    });

    return NextResponse.json(property);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create property" },
      { status: 500 }
    );
  }
}
