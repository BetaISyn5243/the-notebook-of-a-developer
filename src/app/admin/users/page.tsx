import {getIndexData} from "@/app/admin/utils/getIndexData";
import {IRoleGET} from "@/app/api/role/route";
import {IUserGET} from "@/app/api/user/route";
import AdminIndexCard from "@/app/admin/components/AdminIndexCard";
import AdminIndexLayout from "@/app/admin/components/AdminIndexLayout";


export default async function UsersPage() {
  const data = await getIndexData('http://localhost:3000/api/user') as IUserGET[];
  
  return <AdminIndexLayout>
      {
        data.map((x, key) => {
          return <AdminIndexCard key={key} >
              <div><strong>ID:</strong> {x._id}</div>
              <div><strong>Username:</strong> {x.username}</div>
              <div><strong>Name:</strong> {x.name}</div>
              <div><strong>Surname:</strong> {x.surname}</div>
              <div><strong>Email:</strong> {x.email}</div>
              <div><strong>Password:</strong> {x.password}</div>
              <div><strong>Role:</strong> {x.role}</div>
              <div><strong>isSuspend:</strong> {x.suspended.toString()}</div>
              <div><strong>Created Date:</strong> {new Date(x.date).toLocaleDateString()}</div>
          </AdminIndexCard>
        })
      }
  </AdminIndexLayout>
}
