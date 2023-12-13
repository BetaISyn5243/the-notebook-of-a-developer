import {NextResponse} from "next/server";
import dbConnect from "@/lib/dbConnect";
import Category from "@/models/categoryModel";
import {deleteHandler, postHandler, putHandler} from "@/utils/apiHandler";

interface ICategoryPOST {
  name: string;
  description: string;
  hidden?: boolean;
  parent?: string;
}

interface ICategoryPUT {
  ObjectId: string;
  name: string;
  description: string;
  hidden?: boolean;
  parent?: string;
}

interface ICategoryDELETE {
  ObjectId: string;
}

export interface ICategoryGET {
  _id: string;
  name: string;
  description: string;
  date: string;
  hidden: boolean;
  parent?: string;
}

export async function POST(request: Request) {
  return await postHandler(request,Category)
}

export async function PUT(request: Request) {
  return await putHandler(request,Category);
}


export async function DELETE(request: Request) {
  return await deleteHandler(request,Category);
}

export async function GET(): Promise<NextResponse<ICategoryGET[]>> {
  await dbConnect();
  const tests = await Category.find({}) as ICategoryGET[];
  return NextResponse.json(tests);
}