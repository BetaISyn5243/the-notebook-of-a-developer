import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '../globals.css'
import SidebarComponent from "@/app/components/Sidebar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'Version 0.0.1',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={ inter.className}>
    <div className={"flex w-full"}>
      <SidebarComponent/>
      <div className={"px-4 py-1 w-full "}>{children}</div>
    </div>

    </body>
    </html>
  )
}
