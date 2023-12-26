"use client"

import Image from 'next/image'
import styles from './imageSwap.module.scss'
import { useState } from 'react'
import clsx from 'clsx'
import { PiArrowFatLinesDownFill } from "react-icons/pi"

const NextCarousel = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0].node)
  const [scrolled, setScrolled] = useState(false)
  console.log(`%c mainImage`, 'background: #0047ab; color: #fff; padding: 2px:', mainImage)
  const handleImageSwap = (url: string) => {
    setMainImage(url)
  }
  const handleScrollImage = () => {
    setScrolled(!scrolled)
  }
  const ListStyles = clsx({
    [styles.listScrolled]: scrolled
  })
  return (
    <div className={styles.imageSwapContainer}>
      <figure>
        <Image
          src={mainImage.url}
          alt={''}
          width={500}
          height={500}
        />
        <figcaption>{mainImage.altText}</figcaption>
      </figure>
      <div>
        <ul className={ListStyles}>
          {images.map(item => (
            <li key={item.node.id}>
              <button onClick={() => handleImageSwap(item.node)}>
                <Image
                  src={item.node.url}
                  alt={''}
                  width={80}
                  height={80}
                />
              </button>
            </li>
          ))}
        </ul>
        {images.length > 5 &&
          <button className={styles.moreButton} onClick={() => handleScrollImage()}>
            <PiArrowFatLinesDownFill size={30} fill={"white"} />
          </button>
        }
      </div>

    </div>
  )
}

export default NextCarousel
