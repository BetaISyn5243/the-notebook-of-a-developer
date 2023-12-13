import {getIndexData} from "@/app/admin/utils/getIndexData";
import {IPrivilegesGET} from "@/app/api/privileges/route";
import AdminIndexLayout from "@/app/admin/components/AdminIndexLayout";
import AdminIndexCard from "@/app/admin/components/AdminIndexCard";


export default async function PrivilegesPage() {
  const data = await getIndexData('http://localhost:3000/api/privileges') as IPrivilegesGET[];
  
  return <AdminIndexLayout>
      {
        data.map((x, key) => {
          return <AdminIndexCard key={key} >
              <div><strong>ID:</strong> {x._id}</div>
              <div><strong>Name:</strong> {x.name}</div>
              <div><strong>ID (external):</strong> {x.id}</div>
          </AdminIndexCard>
        })
      }
  </AdminIndexLayout>;
}
