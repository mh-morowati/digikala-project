import Image from 'next/image';
import Footer from '../../../components/footer/index';
import Header from '@/components/header';
import Link from 'next/link';


function huaweiWatchFit() {
    return (<><Header/>
    <div className='text-center'>
        <div className='my-3'>
            <Image src={'/landing-img/whatch/39b111e94e780.webp'} alt='' width={1514} height={500} />
        </div>
        <div className='my-3'>
            <h1 className='text-xl text-zinc-800 my-4'>فقط از 1 تا 7 مرداد فرصت دارید Watch Fit3 هوآوی را <span className='text-red-500'>با 10 درصد تخفیف</span> پیش‌خرید کنید.</h1>
            <h1 className='text-xl text-zinc-800 my-5'>با پیش‌خرید از دیجی کالا، برنده‌ی یک <span className='text-red-500'>گوشی پرچم‌دار هوآوی</span> خواهید شد.</h1>
        </div>
        <div className='w-[75%] mx-auto border my-3'>
       <div className='inline-block'>
       <h1 className='text-xl text-[rgb(44,44,46)] mb-10'><b>ساعت هوشمند Fit3 هوآوی، همراه با هدیه و ارسال رایگان</b></h1>
       <p className='inline-block bg-red-600 text-white rounded-3xl py-[2px] px-1 ml-5'>۱۰٪ تخفیف</p>
       <p className='line-through inline-block opacity-65 ml-36'>۶,۹۹۹,۰۰۰</p>
            <b className='text-red-500 text-2xl'>۶,۲۹۹,۰۰۰
            تومان</b><br />
            <small>برای دریافت کدتخفیف وارد
               <Link href={'/users/login'}><span className='text-red-500 underline cursor-pointer'>  حساب کاربری </span></Link>
                 شوید</small>
           <Link href={'product/dkp-31549/huaweiWatchFit'}> <button className="mt-10 mr-10 bg-[rgb(239,57,78)] text-white font-bold py-3 px-4 rounded-lg w-[290px]">
           <small>مشاهده جزییات</small></button></Link>
            
       </div>
            <Image className='inline-block' src={'/landing-img/whatch/fb6d1445d60381e5.jpg'} alt='' width={372} height={372} />
        </div>

        <div className='inline-block m-3'>
            <Image className='rounded-xl' src={'/landing-img/whatch/40c21ef2d94d9.webp'} alt='' width={630} height={244} />
        </div>
        <div className='inline-block m-3'>
            <Image className='rounded-xl' src={'/landing-img/whatch/d149c673c6531ada6a.webp'} alt='' width={630} height={244} />
        </div>
        <div className='inline-block m-3'>
            <Image className='rounded-xl' src={'/landing-img/whatch/b21ca269f392ca02e351.webp'} alt='' width={630} height={244} />
        </div>
        <div className='inline-block m-3'>
            <Image className='rounded-xl' src={'/landing-img/whatch/c52aa9051d44b58.webp'} alt='' width={630} height={244} />
        </div>
       
    </div>
    <Footer/></>);
}

export default huaweiWatchFit;