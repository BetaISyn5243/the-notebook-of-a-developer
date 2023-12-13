import {getIndexData} from "@/app/admin/utils/getIndexData";
import {ICodeGET} from "@/app/api/code/route";
import {convertHtmlToReact} from "@hedgedoc/html-to-react";
import AdminIndexLayout from "@/app/admin/components/AdminIndexLayout";
import AdminIndexCard from "@/app/admin/components/AdminIndexCard";


export default async function CodesPage() {
  const data = await getIndexData('http://localhost:3000/api/code') as ICodeGET[];
  
  return <AdminIndexLayout>
    {
      data.map((x, key) => {
        return <AdminIndexCard key={key}>
          
          <div><strong>ID:</strong> {x._id}</div>
          <div><strong>Title:</strong> {x.title}</div>
          <div><strong>Author:</strong> {x.author}</div>
          <div><strong>Categories:</strong>{x.categories.toString()} </div>
          <div><strong>Description:</strong> {x.description}</div>
          <div><strong>Code:</strong> {x.code}</div>
          {x.code && <div><strong>Code Vision:</strong> {convertHtmlToReact(x.code)}</div>}
          <div><strong>Created Date:</strong> {new Date(x.date).toLocaleDateString()}</div>
          <div><strong>isHidden:</strong> {x.hidden.toString()}</div>
          <div><strong>Meta Data:</strong> {x.meta && x.meta.toString()}</div>
          <div><strong>Comments:</strong> {x.comments && x.comments.toString()}</div>
          <div><strong>External Links:</strong> {x.externalLinks && x.externalLinks.toString()}</div>
          <div><strong>References:</strong> {x.references && x.references.toString()}</div>
          <div><strong>Photos Url:</strong> {x.photos && x.photos.toString()}</div>
        </AdminIndexCard>
      })
    }
  
  </AdminIndexLayout>;
}
