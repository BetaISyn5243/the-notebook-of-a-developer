import {NextResponse} from "next/server";
import Test from "@/models/testModel";
import dbConnect from "@/lib/dbConnect";

export async function POST(request: Request) {
  const req = await request.json();
  if (!req) {
    return {error: "No body provided"}
  }
  const {name, email} =  req;
  await dbConnect();
  await Test.create({name, email});
  return NextResponse.json({message: "Success"});
}

export async function GET() {
  await dbConnect();
  const tests = await Test.find({});
  return NextResponse.json( tests);
}