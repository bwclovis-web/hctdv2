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
  "pageContent": *[_type == "page" && pageTitle== 'home page']{
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
  "featuredArtist": *[_type == "featuredArtist" && isFeatured == true]  {
    slug {
      current
    },
    pageHero {
      heading,
      eyebrow,
      heroImage {
        asset -> {
          ...,
          metadata
        }
      }
    }
  }
}
`
export const sanityAboutPageQuery = `{
  "pageContent": *[_type == "page" && pageTitle== 'about']{
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
