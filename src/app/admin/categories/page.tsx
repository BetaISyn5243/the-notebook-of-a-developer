import {ICategoryGET} from "@/app/api/category/route";
import {getIndexData} from "@/app/admin/utils/getIndexData";
import AdminIndexLayout from "@/app/admin/components/AdminIndexLayout";
import AdminIndexCard from "@/app/admin/components/AdminIndexCard";


export default async function CategoriesPage() {
  const data = await getIndexData('http://localhost:3000/api/category') as ICategoryGET[];
  
  return <AdminIndexLayout>
    {data.map((x, key) =>
      <AdminIndexCard key={key}>
        <div><strong>ID:</strong> {x._id}</div>
        <div><strong>Name:</strong> {x.name}</div>
        <div className={"overflow-ellipsis "}><strong>Description:</strong> {x.description}</div>
        <div><strong>Created at:</strong> {new Date(x.date).toLocaleDateString()}</div>
        <div><strong>isHidden:</strong> {x.hidden.toString()}</div>
        <div><strong>Parent:</strong> {x.parent ?? "none"}</div>
      </AdminIndexCard>
    )}
  </AdminIndexLayout>
}
