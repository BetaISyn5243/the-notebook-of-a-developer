import {getIndexData} from "@/app/admin/utils/getIndexData";
import {IRoleGET} from "@/app/api/role/route";
import AdminIndexLayout from "@/app/admin/components/AdminIndexLayout";
import AdminIndexCard from "@/app/admin/components/AdminIndexCard";


export default async function RolesPage() {
  const data = await getIndexData('http://localhost:3000/api/role') as IRoleGET[];
  
  return <AdminIndexLayout>
    {
      data.map((x, key) => {
        return <AdminIndexCard key={key}>
          
          <div><strong>ID:</strong> {x._id}</div>
          <div><strong>Name:</strong> {x.name}</div>
          <div><strong>Description:</strong> {x.description}</div>
          <div><strong>Color:</strong>{x.color.toString()} </div>
          <div><strong>Icon:</strong>{x.icon.toString()} </div>
          <div><strong>isPrivate:</strong>{x.private.toString()} </div>
          <div><strong>Privileges:</strong>{x.privileges && x.privileges.toString()} </div>
          <div><strong>Created Date:</strong> {new Date(x.date).toLocaleDateString()}</div>
        </AdminIndexCard>
      })
    }
  </AdminIndexLayout>
  
}
