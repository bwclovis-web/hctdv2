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
