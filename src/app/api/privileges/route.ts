import {deleteHandler, postHandler, putHandler} from "@/utils/apiHandler";
import {NextResponse} from "next/server";
import dbConnect from "@/lib/dbConnect";
import Code from "@/models/codeModel";
import User from "@/models/userModel";
import Privileges from "@/models/privilegesModel";

export interface IPrivilegesGET {
  _id: string;
  name: string;
  id: number;
}

export async function POST(request: Request) {
  return await postHandler(request, Privileges)
}

export async function PUT(request: Request) {
  return await putHandler(request, Privileges);
}


export async function DELETE(request: Request) {
  return await deleteHandler(request, Privileges);
}

export async function GET(): Promise<NextResponse<IPrivilegesGET[]>> {
  await dbConnect();
  const tests = await Privileges.find({}) as IPrivilegesGET[];
  return NextResponse.json(tests);
}