'use client'

import { useState, useEffect, createContext } from 'react'
import { shopClient } from '@/lib/shopifyClient'

const ctxDefaults = {
  addVariantToCart: (id, amount) => { },
  removeLineItem: () => { },
  updateLineItem: (ard0, arg1, arg2) => { },
  setCartDisplayPrice: (ard0, arg1) => { },
  setThisVariantId: arg0 => {},
  loading: false,
  thisVariantId: '',
  cartDisplayPrice: '',
  numItemsInCart: 0,
  shopClient,
  checkout: {
    id: '',
    lineItems: [],
  },
}

const ShopContext = createContext(ctxDefaults)

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`

export const CartProvider = ({ children }) => {
  const [ checkout, setCheckout ] = useState(ctxDefaults.checkout)
  const [ loading, setLoading ] = useState(false)
  const [ didJustAddToCart, setDidJustAddToCart ] = useState(false)
  const [ cartDisplayPrice, setCartDisplayPrice ] = useState('')
  const [thisVariantId, setThisVariantId] = useState('')
  const [ numItemsInCart, setNumItemsInCart ] = useState(checkout.lineItems.length)

  const setCheckoutItem = checkout => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, String(checkout.id))
    }
    setCheckout(checkout)
  }

  useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser ?
        localStorage.getItem(localStorageKey) :
        null

      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await shopClient.checkout.fetch(
            existingCheckoutID
          )
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout)
            setNumItemsInCart(existingCheckout.lineItems.length)
            return
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, '')
        }
      }

      const newCheckout = await shopClient.checkout.create()
      
      setCheckoutItem(newCheckout)
    }

    initializeCheckout()
  }, [])

  const addVariantToCart = async variantId => {
    setLoading(true)
    const checkoutID = checkout.id
    const lineItemsToUpdate = [{
      variantId,
      quantity: 1,
    }]

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    return await shopClient.checkout
      .addLineItems(checkoutID, lineItemsToUpdate)
      .then(res => {
        setNumItemsInCart(res.lineItems.length)
        setCheckout(res)
        setLoading(false)
        setDidJustAddToCart(true)
        setCartDisplayPrice('')
        setThisVariantId('')
      })
  }

  const removeLineItem = async (checkoutID, lineItemID) => {
    setLoading(true)

    return await shopClient.checkout
      .removeLineItems(checkoutID, [lineItemID])
      .then(res => {
        setCheckout(res)
        setNumItemsInCart(res.lineItems.length)
        setLoading(false)
      })
  }

  const updateLineItem = async (checkoutID, lineItemID, quantity) => {
    setLoading(true)
    const lineItemsToUpdate = [{ id: lineItemID, quantity: parseInt(quantity, 10) }]

    return await shopClient.checkout
      .updateLineItems(checkoutID, lineItemsToUpdate)
      .then(res => {
        setCheckout(res)
        setNumItemsInCart(res.lineItems.length)
        setLoading(false)
      })
  }

  return (
    <ShopContext.Provider value={{
      ...ctxDefaults,
      addVariantToCart,
      removeLineItem,
      updateLineItem,
      checkout,
      loading,
      numItemsInCart,
      didJustAddToCart,
      shopClient,
      cartDisplayPrice,
      setCartDisplayPrice,
      setThisVariantId,
      thisVariantId
    }}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContext
