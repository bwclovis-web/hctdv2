import ProductRow from "@/app/ui/molecules/ProductRow/ProductRow"
import { getAllCollectionsQuery, getProductByCollection } from "@/lib/shopifyGql"
import { Metadata } from "next"
export const dynamicParams = false

export const generateStaticParams = async () => {
  const allCollections = await getAllCollectionsQuery()
  return allCollections.map((item: { node: { handle: any } }) => ({
    slug: item.node.handle
  }))
}

const getCategory = async (params: { slug: string }) => {
  const productsByCollection = await getProductByCollection(params.slug)

  return productsByCollection
}

export const generateMetadata = async (params: { params: { slug: string } }): Promise<Metadata> => {
  const category = await getCategory(params.params)
  return {
    title: category.title
  }
}
const SingleCategoryPage = async ({ params }: any) => {
  const category = await getCategory(params)
  const { edges } = category.products

  return (
    <section>
      <div className="main-container">
        <h1>{category.title}</h1>
        <ProductRow data={edges} type="/shop" />
      </div>
    </section>
  )
}

export default SingleCategoryPage


