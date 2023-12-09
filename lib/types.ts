export type ProductType = {
    currentItem?: string
    type: string
    data: [
        {
            product: {
                handle: string
                title: string
                image: {
                    url: string;
                };
                featuredImage: {
                    url: string
                }
            }
        }
    ]
}
export type SingleCollectionType = { 
    collection: { 
        products: { 
            edges: any 
        } 
        title: string 
        descriptionHtml: any; 
        handle: string | undefined 
    } 
}

export type DynamicPageType = {
    params: {
        slug: string
    }
}
