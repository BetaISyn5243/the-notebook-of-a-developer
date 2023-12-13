import {NextResponse} from "next/server";
import {Model} from "mongoose";
import dbConnect from "@/lib/dbConnect";

export async function postHandler(request: Request, model: Model<any>) {
  try {
    var req = await request.json();
    
  } catch {
    return NextResponse.error();
  }
  if (!req) {
    return NextResponse.json({error: "No body provided"})
  }
  await dbConnect();
  
  return await model.create(req).then(
    () => NextResponse.json({message: "Success"})
  ).catch(() => NextResponse.error());
  
}

export async function putHandler(request: Request, model: Model<any>) {
  try {
    var req = await request.json();
    
  } catch {
    return NextResponse.error();
  }
  if (!req) {
    return NextResponse.json({error: "No body provided"})
  }
  await dbConnect();
  
  return await model.findByIdAndUpdate(req.ObjectId,req).then(
    () => NextResponse.json({message: "Success"})
  ).catch(() => NextResponse.error());
  
}

export async function deleteHandler(request: Request, model: Model<any>) {
  try {
    var req = await request.json();
    
  } catch {
    return NextResponse.error();
  }
  if (!req) {
    return NextResponse.json({error: "No body provided"})
  }
  await dbConnect();
  
  return await model.findByIdAndDelete(req.ObjectId).then(
    () => NextResponse.json({message: "Success"})
  ).catch(() => NextResponse.error());
  
}
