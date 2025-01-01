'use client'
import { useEffect, useState } from "react"
import Image from 'next/image'

const images = [
  {src:'/discount/route-img/616218a6a42e5f79f2b6b70.webp',
     width:1519,height:400},
  {src:'/discount/route-img/a6af32c1592a2810bea4.webp',
     width:1519,height:400}
]

const ImgDiscount: React.FC = () =>{

  const [currentImageIndex,setCurrentImageIndex] = useState(0)

  useEffect(() =>{

    const interval = setInterval(() =>{
      setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % images.length)
    },3000)

    return () =>clearInterval(interval)
  },[])

  return(<div>
    <Image 
    src={images[currentImageIndex].src}
    alt="" width={images[currentImageIndex].width}
    height={images[currentImageIndex].height}
    />
  </div>)
}

export default ImgDiscount