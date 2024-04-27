import { ChangeEvent } from "react"

export type CartDetailProps = {
    data: {
        webUrl?: string
        id: string
        subtotalPriceV2: {
            amount: number
            currencyCode: string
        }
    }
}

export type CartItemProps = {
    update: (arg0?:string, arg1?: string) => {},
    deleteItem: (arg0?:string) => {},
    item: {
        title: string
        variant: {
            image: {
                src: string
            }
            attrs: {
                selectedOptions: [{value: string}]
                priceV2: {
                    amount: number
                    currencyCode: string
                }
            }
        }
        quantity: number
        id: string
    }
}
