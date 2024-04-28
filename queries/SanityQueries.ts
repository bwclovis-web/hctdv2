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
  "pageContent": *[_type == "page" && pageTitle== 'home page'][0]{
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
  "featuredArtist": *[_type == "featuredArtist" && isFeatured == true][0]  {
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
  "pageContent": *[_type == "page" && pageTitle== 'about'][0]{
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
export const sanityContactPageQuery = `{
  "pageContent": *[_type == "page" && pageTitle== 'contact'][0]{
    faqs,
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
export const previousArtistSlugQuery = `
*[_type == "featuredArtist" && defined(slug.current)][].slug.current
`

export const previousFeaturedArtistQuery = `
*[_type == "featuredArtist" && slug.current == $slug][0] {
  pageTitle,
  isFeatured,
  bio,
  artistEntry | order(_createdAt desc),
  'currentEntry': artistEntry[0] {
    ...,
    submissionImage {
      asset -> {
        ...,
        metadata
      }
    }
  },
  socialMedia,
  firstName,
  lastName,
  websiteLink,
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
`

export const featuredArtistPageQuery = `
{
  "featuredArtist": *[_type == "featuredArtist" && isFeatured == true][0] {
    pageTitle,
    isFeatured,
    bio,
    artistEntry | order(_createdAt desc),
    'currentEntry': artistEntry[0] {
      ...,
      submissionImage {
        asset -> {
          ...,
          metadata
        }
      }
    },
    socialMedia,
    firstName,
    lastName,
    websiteLink,
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
  },
  "previousFeatured": *[_type == "featuredArtist" && isFeatured != true] | order(_createdAt desc) {
    slug,
    pageTitle,
    pageHero {
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
