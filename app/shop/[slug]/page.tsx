import { Metadata } from "next"
import { getAllProductsQuery, getSingleProductPageProps } from "@/lib/shopifyGql"
import { DynamicPageType } from "@/lib/types"

import AddToCartButton from "@/app/ui/molecules/AddToCartButton/AddToCartButton"
import ProductHeroComponent from "@/app/ui/molecules/Hero/ProductHero"
import PackingSelectorComponent from "@/app/ui/ProductPage/PackingSelector/PackingSelector"

import styles from './SingleProductPage.module.scss'
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel'
import NextCarousel from "@/app/ui/molecules/Carousel/NextCarousel"

export const generateStaticParams = async () => {
  const allProducts = await getAllProductsQuery()
  return allProducts.map((item: { node: { handle: any } }) => ({
    slug: item.node.handle
  }))
}

export const generateMetadata = async (params: { params: { slug: string } }): Promise<Metadata> => {
  const product = await getSingleProductPageProps(params.params.slug)
  return {
    title: product.title
  }
}

const SingleProductPage = async ({ params }: DynamicPageType) => {
  const product = await getSingleProductPageProps(params.slug)
  const { variants, images, featuredImage } = product
  const variant = variants.edges


  return <>
    <ProductHeroComponent heroImage={product} />
    <section className={`${styles.singlePage} main-container`}>
      <div>
        <h1>{product.title}</h1>
        {product.availableForSale ?
          <>
            <PackingSelectorComponent data={variant} />
            <div className={styles.cartButton}>
              <AddToCartButton item={product} />
            </div>
          </> :
          <p>Sorry this item is currently out of stock.</p>
        }
      </div>
      <div className={styles.singlePageImage}>
        <NextCarousel images={images.edges} />
      </div>
    </section>
  </>
}

export default SingleProductPage
