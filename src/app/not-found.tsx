import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';
import Header from '../components/header/index';

function NotFound() {
    return (<><Header/>
    <div>
        <div className='h-[500px] text-center'>
            <div className='mt-10'>
                <h1 className='text-xl text-zinc-700 mb-5'> <b>صفحه‌ای که دنبال آن بودید پیدا نشد!</b></h1>
                <Link href={'/'}><small className='text-sky-500' >صفحه اصلی</small></Link>
            </div>
            <Image src={'/page-not-found.webp'} alt='page-not-found' width={450} height={400} />
        </div>
    </div>
    <Footer/></>);
}

export default NotFound;