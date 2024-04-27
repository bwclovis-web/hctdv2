import ProductRow from "@/app/ui/molecules/ProductRow/ProductRow"
import { getAllCurrentTags, getAllItemsByTag } from "@/lib/shopifyGql"
import { Metadata } from "next"

export const generateStaticParams = async () => {
  const allProducts = await getAllCurrentTags()
  return allProducts.map((item: { node: { handle: any } }) => ({
    slug: item
  }))
}

export const generateMetadata = async (params: { params: { slug: any } }): Promise<Metadata> => {
  const product = await getAllItemsByTag(params.params.slug)
  return {
    title: `${params.params.slug} | Shop`
  }
}

type RelatedPageType = {
  params: {
    slug: string
  }
}
const RelatedTagPage = async ({ params }: RelatedPageType) => {
  const allItemsByTag = await getAllItemsByTag(params.slug)

  return (
    <>
      <article className="container container-condensed p-dynamic-container-y min-h-screen">
        <ProductRow data={allItemsByTag} type="/shop" />
      </article>
      oh hai
    </>
  )
}



export default RelatedTagPage
