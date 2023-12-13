import {deleteHandler, postHandler, putHandler} from "@/utils/apiHandler";
import {NextResponse} from "next/server";
import dbConnect from "@/lib/dbConnect";
import Code from "@/models/codeModel";

export interface ICodeGET {
  _id: string;
  title: string;
  author: string;
  categories: string[];
  description: string;
  code?: string;
  date: Date;
  hidden: boolean;
  meta?: {
    votes?: number;
    fav?: number;
  };
  comments?: [{ body: string; date: Date }];
  externalLinks?: [{ link: string; description: string }];
  references?: [{ link: string; description: string }];
  photos?: [{ link: string; description: string; embedLink: string }];
}

export async function POST(request: Request) {
  return await postHandler(request, Code)
}

export async function PUT(request: Request) {
  return await putHandler(request, Code);
}


export async function DELETE(request: Request) {
  return await deleteHandler(request, Code);
}

export async function GET(): Promise<NextResponse<ICodeGET[]>> {
  await dbConnect();
  const tests = await Code.find({}) as ICodeGET[];
  return NextResponse.json(tests);
}