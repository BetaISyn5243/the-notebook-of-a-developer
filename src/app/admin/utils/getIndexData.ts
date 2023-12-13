export async function getIndexData(url:string): Promise<any> {
  const res = await fetch(url, { next: { revalidate: 100 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}