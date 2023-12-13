import {deleteHandler, postHandler, putHandler} from "@/utils/apiHandler";
import {NextResponse} from "next/server";
import dbConnect from "@/lib/dbConnect";
import Code from "@/models/codeModel";
import User from "@/models/userModel";

export interface IUserGET {
  _id: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  date: Date;
  suspended: boolean;
  email: string;
  role?: string;
}

export async function POST(request: Request) {
  return await postHandler(request, User)
}

export async function PUT(request: Request) {
  return await putHandler(request, User);
}


export async function DELETE(request: Request) {
  return await deleteHandler(request, User);
}

export async function GET(): Promise<NextResponse<IUserGET[]>> {
  await dbConnect();
  const tests = await User.find({}) as IUserGET[];
  return NextResponse.json(tests);
}