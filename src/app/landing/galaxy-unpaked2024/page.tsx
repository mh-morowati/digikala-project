/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';


function GalaxyUnpack() {
  return (<><Header />
    <div>
      <div className='mb-10'>
        <Image src={'/landing-img/e1272decb672540df581.webp'} alt='' width={1524} height={300} />
      </div>
      <div className='w-full mb-10'>
        <div className='w-[75%] mx-auto border'>
          <div className='inline-block'>
            <h1 className='text-xl text-[rgb(35,37,78)] mb-10'><b>به همراه هدیه Galaxy Watch FE، قلم لمسی و کاور مخصوص Galaxy Z Fol...</b></h1>
            <b className='text-red-500 text-2xl'>۱۰۷,۴۹۹,۰۰۰
              تومان</b><br />
            <small>برای دریافت کدتخفیف وارد
              <Link href={'/users/login'}><span className='text-red-500 underline cursor-pointer'>  حساب کاربری </span></Link>
              شوید</small>
            <Link href={"/product/dkp-31549/Galaxy-Z-Fold6"}><button className="mt-10 mr-10 bg-[rgb(239,57,78)] text-white font-bold py-3 px-4 rounded-lg w-[290px]">
            <small>مشاهده جزییات</small></button></Link>
          </div>
          <Image className='inline-block' src={'/landing-img/36661a272aea718f.jpg'} alt='' width={400} height={372} />
        </div>
      </div>
      <div className='w-full mb-10'>
        <div className='w-[75%] mx-auto border'>
          <div className='inline-block'>
            <h1 className='text-xl text-[rgb(35,37,78)] font-bold mb-10'>به همراه هدیه Galaxy Buds FE، کاور مخصوص Galaxy Z Flip 6...</h1>
            <b className='text-red-500 text-2xl'>۶۴,۹۹۹,۰۰۰
              تومان </b><br />
            <small>برای دریافت کدتخفیف وارد
              <Link href={'/users/login'}><span className='text-red-500 underline cursor-pointer'>  حساب کاربری </span></Link>
              شوید </small>
           <Link href={"/product/dkp-31549/Galaxy-Z-Flip6"}><button className="bg-[rgb(239,57,78)] text-white font-bold py-3 px-4 rounded-lg w-[290px] mt-10 mr-10">
           <small>مشاهده جزییات</small></button></Link> 
          </div>
          <Image className='inline-block' src={'/landing-img/28f68ecee71d01bd.jpg'} alt='' width={400} height={372} />
        </div>
      </div>
      <div className='w-[90%] mx-auto mb-10'>
        <Image className='rounded-lg' src={'/landing-img/2821fb1b37480a6d4df.webp'} alt='' width={1352} height={124} />
      </div>
      <div className='mb-10'>
        <img src={'/landing-img/4e5194c00e50ddf7e14.webp'} alt='' width={600} height={195.2} />
      </div>
    </div>
    <Footer /></>);
}

export default GalaxyUnpack;