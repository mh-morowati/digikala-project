'use client'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import Link from 'next/link'
import { useState } from "react"
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';


function Stories() {

       const [open, setOpen] = useState(false)
       const handleOpen = () => setOpen(true)

       const handleClose = () => setOpen(false)
       const [videoUrl, setVideoUrl] = useState<string>('')

       const [productUrl, setProductUrl] = useState<string>('')

       const playVideo = (url: string) => {
              setVideoUrl(url)
       }

       const linkUrl = (url: string) => {
              setProductUrl(url)
       }

       const getVideoUrl = [
              '/videos/GtabA8.mp4',
              '/videos/s23fe.mp4',
              '/videos/s24.mp4',
              '/videos/360.mp4',
              '/videos/GtabA8.mp4',
              '/videos/s23fe.mp4',
              '/videos/s24.mp4',
              '/videos/360.mp4']

       const link = [
              '/product/dkp-31549/Galaxy-Tab-A8',
              '/product/dkp-31549/s23fe',
              '/product/dkp-31549/s24',
              '/product/dkp-31549/dermatipic-light-cream',
              '/product/dkp-31549/Galaxy-Tab-A8',
              '/product/dkp-31549/s23fe',
              '/product/dkp-31549/s24',
              '/product/dkp-31549/dermatipic-light-cream']

       const bgImage = [
              '/videos/pic/Galaxy-Tab-A8.webp',
              '/videos/pic/s23fe.jpg',
              '/videos/pic/s24.webp',
              '/videos/pic/dermatipic.webp',
              '/videos/pic/Galaxy-Tab-A8.webp',
              '/videos/pic/s23fe.jpg',
              '/videos/pic/s24.webp',
              '/videos/pic/dermatipic.webp']

       return (<div className='flex gap-5 overflow-x-scroll md:overflow-x-auto'>
              {getVideoUrl.map((video, index) => (
                     <>
                            <div>
                                   <button
                                          style={{
                                                 backgroundImage: `url(${bgImage[index]})`,
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                          }}
                                          className='w-14 h-14 md:h-20 md:w-20 rounded-full border-[3px] border-purple-600'
                                          key={index}
                                          onClick={() => { handleOpen(), playVideo(video), linkUrl(link[index]) }}
                                   >
                                   </button>
                            </div>
                            <Modal
                                   open={open}
                                   className='w-96 h-96 max-sm:w-full mx-auto absolute z-50'
                                   onClose={handleClose}
                            >
                                   <Box>
                                          <Typography>
                                                 <Link href={productUrl}>
                                                        <button
                                                               className=' bg-yellow-300 px-3 py-1'
                                                        >
                                                               خرید این کالا <ShoppingCartCheckoutIcon />
                                                        </button>
                                                 </Link>
                                                 <video
                                                        src={videoUrl}
                                                        controls autoPlay
                                                        className="w-96 h-96 max-sm:h-60 max-mobile-l:h-[208px] max-mobile-m:h-44"
                                                 >

                                                 </video>
                                          </Typography>
                                   </Box>

                            </Modal>
                     </>
              ))}
       </div>)
}

export default Stories