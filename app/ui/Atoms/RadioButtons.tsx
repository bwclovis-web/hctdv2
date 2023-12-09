import { memo, ChangeEvent, SetStateAction } from "react"
import styles from './RadioButtons.module.scss'
import { RadioButtonType } from "./RadioButtonData"

const RadioButtons = ({ data, changeAction }: RadioButtonType) => {
  const handleVariationChange = (evt: ChangeEvent<HTMLInputElement>, available: any) => {
    !available ? evt.preventDefault() : changeAction(evt.target.value as SetStateAction<string>)
  }

  return (
    <div className={styles.radioButton}>
      <input
        id={data.id}
        type="radio"
        name="variations"
        aria-disabled={!data.availableForSale}
        value={data.id}
        onChange={evt => handleVariationChange(evt, data.availableForSale)}
      />
      <label htmlFor={data.id}>
        <span>{data?.selectedOptions[0]?.value}</span>
        {!data.availableForSale && <span className="sr-only">currently unavailable</span>}
      </label>
    </div>
  )
}

export default memo(RadioButtons)
