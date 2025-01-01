'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from 'next/image'

const images = [
  {src:'/img-page/5734c0805d17495.webp',
     width:1518,height:400,
     href:'/landing/new-style'},
  {src:'/img-page/6d1275527c791d38.webp',
     width:1518,height:400,
     href:'/product/dkp-31549/ice-cofee571'},
  {src:'/img-page/419ad39b5c3074.webp',
     width:1518,height:400,
     href:'/landing/huawei-watch-fit3'},
  {src:'/img-page/e1272decb672.webp',
     width:1518,height:400,
     href:'/landing/galaxy-unpaked2024'}
]

const ScrollingPictures: React.FC = () =>{

  const [currentImageIndex,setCurrentImageIndex] = useState(0)

  useEffect(() =>{

    const interval = setInterval(() =>{
      setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % images.length)
    },3000)
    return () =>clearInterval(interval)
  },[])

  return(
  <div className="mt-2 max-mobile-l:mt-4">
    <Link href={images[currentImageIndex].href} target="blank">
    <Image 
    className="h-[350px] max-md:w-[475px] max-md:h-[150px]
     max-mobile-l:w-[375px] max-mobile-m:w-[325px] 2xl:w-[80%] 2xl:h-[550px]"
      src={images[currentImageIndex].src}
    alt="" width={images[currentImageIndex].width}
    height={images[currentImageIndex].height}
    />
    </Link>
  </div>)
}

export default ScrollingPictures
