import { Dispatch, SetStateAction } from "react"

export type RadioButtonType = {
    data: {
        id: string
        availableForSale: boolean
        selectedOptions: [{value: string}]
    }
    changeAction: Dispatch<SetStateAction<string>>
}
