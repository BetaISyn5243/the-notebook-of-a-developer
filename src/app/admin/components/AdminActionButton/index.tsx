'use client'

import React, {ReactNode} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function AdminActionButton({title, props, link}: {
  title?: ReactNode,
  props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  link?: string
}) {
  const router = usePathname()
  if (link) {
    return <Link href={router + link} className={"w-full"}>
      <button {...props} className={"shadow rounded w-full  " + (props?.className ?? "")}>{title}</button>
    </Link>
  }
  return <button {...props} className={"shadow rounded w-full  " + (props?.className ?? "")}>{title}</button>
}