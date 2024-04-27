import sanityClient from '@/lib/sanityClient'
import { NextSeo } from 'next-seo'

// import ImageButton from 'components/atoms/ImageButton/ImageButton'

import { featuredArtistPageQuery } from '@/queries/SanityQueries'
import FeaturedArtistContainer from './ui/FeaturedArtistContainer/FeaturedArtistContainer'
import NewArtistForm from './ui/NewArtistForm/NewArtistForm'
import ImageButton from '@/app/ui/Atoms/ImageButton/ImageButton'
import PreviousArtists from './ui/PreviousArtists/PreviousArtists'

const FeaturedArtistPage = async () => {
  const contentProps = await sanityClient.fetch(featuredArtistPageQuery, { next: { revalidate: 3600 } })
  const { featuredArtist, previousFeatured } = contentProps
  return (
    <>
      {/* <NextSeo
        title={`Featured artist | ${featuredArtist.pageTitle}`}
        description={`Happy Cat Tie Dye's featured artist ${featuredArtist.pageTitle}`}
      /> */}
      <FeaturedArtistContainer content={featuredArtist} />
      <NewArtistForm />
      {
        previousFeatured.length ? <PreviousArtists previousFeatured={previousFeatured} /> : null
      }
    </>
  )
}

export default FeaturedArtistPage
