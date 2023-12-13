import {deleteHandler, postHandler, putHandler} from "@/utils/apiHandler";
import {NextResponse} from "next/server";
import dbConnect from "@/lib/dbConnect";
import Code from "@/models/codeModel";
import Role from "@/models/roleModel";
import exp from "constants";

export interface IRoleGET {
  _id: string;
  name: string;
  description: string;
  date: Date;
  privileges?: string[];
  private: boolean;
  color: string;
  icon: string;
}
export async function POST(request: Request) {
  return await postHandler(request, Role)
}

export async function PUT(request: Request) {
  return await putHandler(request, Role);
}


export async function DELETE(request: Request) {
  return await deleteHandler(request, Role);
}

export async function GET(): Promise<NextResponse<IRoleGET[]>> {
  await dbConnect();
  const tests = await Role.find({}) as IRoleGET[];
  return NextResponse.json(tests);
}