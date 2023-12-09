import sanityClient from "@/lib/sanityClient"
import { sanityAboutPageQuery } from "@/queries/SanityQueries"
import HeroComponent from "../ui/molecules/Hero/Hero"

const AboutUs = async () => {
  const contentProps = await sanityClient.fetch(sanityAboutPageQuery)
  const { pageContent } = contentProps
  return (
    <>
      <p>About page</p>
      <HeroComponent heroImage={pageContent[0].pageHero} />
    </>
  )
}

export default AboutUs
