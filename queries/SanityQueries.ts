export const navigationQuery = `
*[_type == "siteConfig"]{
    mainNav[]->{ 
      _id,
      slug,
      pageTitle,
    }
  }
`

export const sanityHomepageQuery = `{
  "pageContent": *[_type == "page" && pageTitle== 'home']{
    pageHero {
      heading,
      eyebrow,
      description,
      heroImage {
        asset-> {
          url,
          metadata
        }
      }
    }
  },
}
`
