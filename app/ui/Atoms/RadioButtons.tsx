import { useEffect, memo, ChangeEvent } from "react"
import styles from './RadioButtons.module.scss'

const RadioButtons = ({ data, changeAction }) => {
  const handleVariationChange = (evt: ChangeEvent<HTMLInputElement>, available: any) => {
    !available ? evt.preventDefault() : changeAction(evt.target.value)
  }
  useEffect(() => {
    const inputs = document.querySelectorAll('.radio-buttons')
    const firstRadio = inputs[0]?.firstChild as HTMLInputElement
    firstRadio && firstRadio.setAttribute('checked', 'true')
  }, [])

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
        <span>{data.selectedOptions[0].value}</span>
        {!data.availableForSale && <span className="sr-only">currently unavailable</span>}
      </label>
    </div>
  )
}

export default memo(RadioButtons)
