import sanityClient from '@/lib/sanityClient'
import { previousArtistSlugQuery, previousFeaturedArtistQuery } from '@/queries/SanityQueries'
import FeaturedArtistContainer from '../ui/FeaturedArtistContainer/FeaturedArtistContainer'
import { DynamicPageType } from '@/lib/types'

export const generateStaticParams = async () => {
  const artistPageSlugs = await sanityClient.fetch(previousArtistSlugQuery)

  return artistPageSlugs.map((item: { node: { handle: any } }) => ({
    slug: item.node?.handle
  }))
}

// export const generateMetadata = async (params: { params: { slug: string } }): Promise<Metadata> => {
//   const product = await getSingleProductPageProps(params.params.slug)
//   return {
//     title: `${product.title} | Shop`
//   }
// }

const PreviousFeaturedArtistsPage = async ({ params }: DynamicPageType) => {
  const contentProps = await sanityClient.fetch(previousFeaturedArtistQuery, { slug: params.slug })
  return (
    <>
      <FeaturedArtistContainer content={contentProps} />
    </>
  )
}



export default PreviousFeaturedArtistsPage
