import { getAllProductsQuery, getSingleProductPageProps } from "@/lib/shopifyGql"

export const generateStaticParams = async () => {
  const allProducts = await getAllProductsQuery()
  return allProducts.map((item: { node: { handle: any } }) => ({
    slug: item.node.handle
  }))
}
const SingleProductPage = async ({ params }) => {
  const product = await getSingleProductPageProps(params.slug)
  console.log('product', product)
  return <p> GHHHh</p>
}

export default SingleProductPage
