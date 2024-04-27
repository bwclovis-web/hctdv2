import sanityClient from '@/lib/sanityClient'
import { NextSeo } from 'next-seo'

// import ImageButton from 'components/atoms/ImageButton/ImageButton'

import { featuredArtistPageQuery } from '@/queries/SanityQueries'
import FeaturedArtistContainer from './ui/FeaturedArtistContainer/FeaturedArtistContainer'

const FeaturedArtistPage = async () => {
  const contentProps = await sanityClient.fetch(featuredArtistPageQuery, { next: { revalidate: 3600 } })
  const { featuredArtist } = contentProps
  return (
    <>
      {/* <NextSeo
        title={`Featured artist | ${featuredArtist.pageTitle}`}
        description={`Happy Cat Tie Dye's featured artist ${featuredArtist.pageTitle}`}
      /> */}
      <FeaturedArtistContainer content={featuredArtist} />
      <section className="text-center mb-6 bg-emerald-200 border-t-4 border-b-4 border-emerald-500">
        <div className="content-container py-6">
          <h2 className="font-display text-h3-dynamic mb-10 text-emerald-900">Interested in being a featured artist?</h2>
        </div >
      </section>
      {/* {
        previousFeatured.length ?
          <section className="content-container py-6 text-center">
            <h2 className="font-display text-h3-dynamic mb-10 text-slate-900 capitalize">view previous featured artists</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-4">
              {previousFeatured.map(item => (
                <li key={item.slug.current}>
                  <ImageButton linkData={item} />
                </li>
              ))}
            </ul>
          </section> : null
      } */}
    </>
  )
}

export default FeaturedArtistPage
