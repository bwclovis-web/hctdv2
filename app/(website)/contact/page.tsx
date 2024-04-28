import HeroComponent from "@/app/ui/molecules/Hero/Hero"
import sanityClient from "@/lib/sanityClient"
import { sanityContactPageQuery } from "@/queries/SanityQueries"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Us'
}

const ContactUsPage = async () => {
  const contentProps = await sanityClient.fetch(sanityContactPageQuery, { next: { revalidate: 3600 } })
  const { pageContent } = contentProps
  return (
    <>
      <p>About page</p>
      <HeroComponent heroImage={pageContent.pageHero} />
    </>
  )
}

export default ContactUsPage
