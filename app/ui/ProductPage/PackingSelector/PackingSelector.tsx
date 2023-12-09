"use client"

import { ChangeEvent, Key, SetStateAction, useContext, useEffect, useState } from "react"
import RadioButtons from "../../Atoms/RadioButtons"
import styles from './PackingSelector.module.scss'
import funkyStyles from '../../Atoms/RadioButtons.module.scss'
import ShopContext from "@/app/providers/mainProvider"
import { getPriceByVariantId } from "@/lib/utils/formatPrice"
import { PackingSelectorType } from "./PackingSelectorData"

const PackingSelectorComponent = ({ data }: PackingSelectorType) => {
  const [packingSelected, setPackingSelected] = useState('')
  const [variationId, setVariationId] = useState('')
  const [jars, bags] = data?.reduce((res, ele) => {
    const variation = ele.node.selectedOptions[0].value.toLowerCase()
    res[variation.includes('jar') ? 0 : 1].push(ele as never)

    return res
  }, [[], []])

  const { setCartDisplayPrice } = useContext(ShopContext)

  useEffect(() => {
    variationId && setCartDisplayPrice(getPriceByVariantId(data, variationId))
  }, [setCartDisplayPrice, variationId, data])

  const handlePackingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPackingSelected(evt.target.value)
    setCartDisplayPrice('')
  }

  return (
    <div className={styles.packingWrapper}>
      {bags.length && jars.length &&
        <fieldset>
          <legend>First, please select a packing option.</legend>
          <div className={funkyStyles.radioButton}>
            <input type="radio" id="packingBags" name="packing" value="bags" onChange={evt => { handlePackingChange(evt) }} />
            <label htmlFor="packingBags"><span>BAG</span></label>
          </div>
          <div className={funkyStyles.radioButton}>
            <input type="radio" id="packingJars" name="packing" value="jars" onChange={evt => { handlePackingChange(evt) }} />
            <label htmlFor="packingJars"><span>JAR</span></label>
          </div>
        </fieldset>
      }
      <details className={styles.packingDetails}>
        <summary>Choose your item size</summary>
        <div>
          {packingSelected === 'bags' &&
            bags.map((item: { node: any }, i: Key | null | undefined) => <RadioButtons data={item.node} key={i} changeAction={setVariationId} />)
          }
          {packingSelected === 'jars' &&
            jars.map((item: { node: any }, i: Key | null | undefined) => <RadioButtons data={item.node} key={i} changeAction={setVariationId} />)
          }
          {
            packingSelected === '' && <p>Oops, looks like you forgot to pick an option. Please select from the list above.</p>
          }
        </div>
      </details>
    </div>
  )
}

export default PackingSelectorComponent
