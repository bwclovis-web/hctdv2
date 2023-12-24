/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

const UseToast = () => {
  const [showToast, setShowToast] = useState(false)
  const toggleToast = () => {
    setShowToast(!showToast)
  }

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        toggleToast()
      }, 4500)
    }
  }, [showToast])

  return [showToast, toggleToast]
}

export default UseToast
