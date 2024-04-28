import sanityClient from "@/lib/sanityClient"
import { sanityAboutPageQuery } from "@/queries/SanityQueries"
import HeroComponent from "../../ui/molecules/Hero/Hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Us'
}

const AboutUs = async () => {
  const contentProps = await sanityClient.fetch(sanityAboutPageQuery, { next: { revalidate: 3600 } })
  const { pageContent } = contentProps
  return (
    <>
      <p>About page</p>
      <HeroComponent heroImage={pageContent.pageHero} />
    </>
  )
}

export default AboutUs
