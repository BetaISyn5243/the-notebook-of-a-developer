import {ReactNode} from "react";
import AdminActionButton from "@/app/admin/components/AdminActionButton";
import Link from "next/link";

export default function AdminIndexCard({children}: { children?: ReactNode }) {
  return <div className={"rounded shadow p-4 my-2 w-full"}>
    {children}
    <div className={"flex flex-row mt-2"}>
      
      <AdminActionButton title={"Edit"} link={"/edit"} props={{className: "bg-yellow-500 py-1 mx-0 mr-2"}}/>
      <AdminActionButton title={"Delete"} link={"/delete"} props={{className: "bg-red-500 py-1 mx-0 ml-2"}}/>
    </div>
  </div>
}