import { useContext } from "react"
import clsx from "clsx"
import ShopContext from "@/app/providers/mainProvider"

import styles from './Toast.module.scss'

const Toast = ({ item }) => {
  const { cartDisplayPrice, showToast } = useContext(ShopContext)

  console.log(`%c showToast`, 'background: #0047ab; color: #fff; padding: 2px:', showToast)
  const ToastClasses = clsx({
    [styles.toast]: true,
    [styles.toastOpen]: showToast,
    'fixed bg-green-700 z-20 bottom-0 right-0 shadow-xl  p-4 border-2 rounded-tl-xl text-white  transition-all': true,
    'opacity-0 translate-x-full': !showToast,
    'opacity-100 translate-x-0': showToast
  })

  return (
    <div className={ToastClasses}>
      <p>
        <span className="text-xl font-semibold">{item.title}</span> has been added to cart</p>
      <p className="mt-1"><span className="text-xl font-semibold">Price:</span> {cartDisplayPrice}</p>
    </div>
  )
}

export default Toast 
