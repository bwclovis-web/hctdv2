export type ImageLinkType = {
    type: string
    data: {
        title: string
        handle: string
        availableForSale: boolean
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
