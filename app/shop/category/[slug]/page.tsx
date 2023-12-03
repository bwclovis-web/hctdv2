import { getAllCollectionsQuery, getProductByCollection } from "@/lib/shopifyGql"
export const dynamicParams = false

export const generateStaticParams = async () => {
  const allCollections = await getAllCollectionsQuery()
  return allCollections.map((item: { node: { handle: any } }) => ({
    slug: item.node.handle
  }))
}

const SingleCategoryPage = async ({ params }: any) => {
  const categories = await getCategories(params)
  console.log(categories)
  return <div>oh hai</div>
}



const getCategories = async (params: { slug: string }) => {
  const productsByCollection = await getProductByCollection(params.slug)

  return productsByCollection
}

export default SingleCategoryPage
