'use client'
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Link from 'next/link';
import { useState } from "react";


function Stories() {
       const [videoUrl, setVideoUrl] = useState<string | null>(null)
       const playVideo = (url: string) => {
              setVideoUrl(url);
       };
       const [productUrl, setProductUrl] = useState<string>('')
       const linkUrl = (url: string) => {
              setProductUrl(url);
       };
       const closeVideo = () => {
              setVideoUrl(null);
              setProductUrl('');
       };
       
          
       return (<div>
              <div className="w-20 h-20 rounded-full border-[3px] border-purple-600 cursor-pointer inline-block mr-5
         bg-[url('/videos/pic/Galaxy-Tab-A8.webp')] bg-cover bg-center"
                     onClick={() => {playVideo('/videos/GtabA8.mp4'),linkUrl('/product/dkp-31549/Galaxy-Tab-A8')}}>
              </div>
              <div className="w-20 h-20 rounded-full border-[3px] border-purple-600 p-2 cursor-pointer inline-block mr-5
 bg-[url('/videos/pic/s23fe.jpg')] bg-cover bg-center"
                     onClick={() => {playVideo('/videos/s23fe.mp4'),linkUrl('/product/dkp-31549/s23fe')}}>

              </div>
              <div className="w-20 h-20 rounded-full border-[3px] border-purple-600 p-2 cursor-pointer inline-block mr-5
 bg-[url('/videos/pic/s24.webp')] bg-cover bg-center"
                     onClick={() => {playVideo('/videos/s24.mp4'),linkUrl('/product/dkp-31549/s24')}}>

              </div>
              <div className="w-20 h-20 rounded-full border-[3px] border-purple-600 p-2 cursor-pointer inline-block mr-5
 bg-[url('/videos/pic/dermatipic.webp')] bg-cover bg-center"
                     onClick={() => {playVideo('/videos/360.mp4'),linkUrl('/product/dkp-31549/dermatipic-light-cream')}}>

              </div>
              {/*again*/}
              <div className="w-20 h-20 rounded-full border-[3px] border-purple-600 cursor-pointer inline-block mr-5
         bg-[url('/videos/pic/4afc270677c7ddd.jpg')] bg-cover bg-center"
                     onClick={() => {playVideo('/videos/GtabA8.mp4'),linkUrl('/product/dkp-31549/Galaxy-Tab-A8')}} >
              </div>
              <div className="w-20 h-20 rounded-full border-[3px] border-purple-600 p-2 cursor-pointer inline-block mr-5
 bg-[url('/videos/pic/-original-imagztn77hdgmeka.webp')] bg-cover bg-center"
                     onClick={() => {playVideo('/videos/s23fe.mp4'),linkUrl('/product/dkp-31549/s23fe')}}>

              </div>
              <div className="w-20 h-20 rounded-full border-[3px] border-purple-600 p-2 cursor-pointer inline-block mr-5
 bg-[url('/videos/pic/download.jpg')] bg-cover bg-center"
                     onClick={() => {playVideo('/videos/s24.mp4'),linkUrl('/product/dkp-31549/s24')}}>

              </div>
              <div className="w-20 h-20 rounded-full border-[3px] border-purple-600 p-2 cursor-pointer inline-block mr-5
 bg-[url('/videos/pic/04.29-35.jpg')] bg-cover bg-center"
                     onClick={() => {playVideo('/videos/360.mp4'),linkUrl('/product/dkp-31549/dermatipic-light-cream')}}>

              </div>

              {videoUrl && (
                     <div className="absolute top-1 z-[9999999]">
                            <button onClick={closeVideo} className='text-red-600 bg-yellow-200 px-4 text-xl  py-1'>
                                   <b>exit</b>
                                   <ClearIcon className='bg-yellow-300 mr-3' />
                            </button>
                            <Link href={productUrl}><button className='float-left bg-yellow-300 px-3 py-1'>خرید این کالا <ShoppingCartCheckoutIcon/></button></Link>
                            <video src={videoUrl} controls autoPlay className="w-full h-96 max-sm:h-60 max-mobile-l:h-[208px] max-mobile-m:h-44"></video>
                     </div>
              )}
       </div>);
}

export default Stories;