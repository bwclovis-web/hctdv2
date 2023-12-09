export type ImageLinkType = {
    type: string
    data: {
        title: string
        handle: string
        priceRange?: {
            maxVariantPrice: {
                amount: string
            }
            minVariantPrice: {
                amount: string
            }
        }
        featuredImage: {
            url: string
        }
        image: {
            url: string
        }
    }
}
