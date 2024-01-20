import connectMongoDB from "@/libs/mongodb";
import Material from "@/models/material";
import { NextResponse } from "next/server";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const GET = async () => {
  await connectMongoDB();
  const materials = await Material.find({});
  return NextResponse.json(materials, { headers: corsHeaders });
};

export const POST = async (req) => {
  const  data = await req.json();
  console.log(data);
  await connectMongoDB();
  await Material.create (data);
  return NextResponse.json({ message: "Material Created" }, { status: 201 });
};
