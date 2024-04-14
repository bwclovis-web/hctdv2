"use client"

import Image from 'next/image'
import styles from './imageSwap.module.scss'
import { useState } from 'react'
import clsx from 'clsx'
import { PiArrowFatLinesDownFill } from "react-icons/pi"

type NextCarouselType = {
  images: {
    node: {
      url: string
      altText: string | ''
      id: string
    }

  }[]
}
const NextCarousel = ({ images }: NextCarouselType) => {
  const [mainImage, setMainImage] = useState(images[0].node)
  const [swapping, setSwapping] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleImageSwap = (image: { url: string; altText: string, id: string }) => {
    if (image.url === mainImage.url) {
      return
    }
    setSwapping(true)

    setTimeout(() => {
      setMainImage(image)
      setSwapping(false)
    }, 200)
  }
  const handleScrollImage = () => {
    setScrolled(!scrolled)
  }
  const ListStyles = clsx({
    [styles.listScrolled]: scrolled
  })

  const ImageStyles = clsx({
    [styles.mainImage]: true,
    [styles.mainImageSwapping]: swapping
  })

  return (
    <div className={styles.imageSwapContainer}>
      <figure className={ImageStyles}>
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
