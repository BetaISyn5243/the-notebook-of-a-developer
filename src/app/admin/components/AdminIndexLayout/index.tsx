import {ReactNode} from "react";
import AdminActionButtonList from "../AdminActionButton";
import AdminActionButton from "../AdminActionButton";

export default function AdminIndexLayout({children}: { children?: ReactNode }) {
  return <div className={"w-full flex flex-col my-2"}>
    <AdminActionButton title={"Add"} link={"/add"} props={{className: "bg-blue-500 py-1  mr-2"}}/>
    
    <div className={"grid-cols-2 grid w-full  gap-4 pt-4"}>{children}</div>
  </div>
}