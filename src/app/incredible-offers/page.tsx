import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ImgDiscount from '@/components/scrol-pic/img-discount';
import DivDiscountTwo from '@/components/wonder-dis/div-two';
import WonderProduct from '@/components/wonder-dis/product';
import Link from 'next/link';



const incredibleOffers = () => {
    return (<><Header />
        <div>
            <div className="h-16 bg-[rgb(239,60,81)] text-center">
                <h1 className='text-3xl text-zinc-50 font-bold pt-2 cursor-default'>پیشنهاد شگفت انگیز</h1>
            </div>
            <div>
                <ImgDiscount />
            </div>
            <div className='h-96 bg-red-500 mt-24 max-xl:overflow-scroll'>
                <div className='inline-block'>
                    <Image src={'/discount/New-folder/FeaturedPromos.svg'} alt='Amazings' height={125} width={125} />
                    <Image src={'/discount/New-folder/General.webp'} alt='Amazings' height={145} width={145} />
                </div>
                <div className='inline-block mr-8'>
                    <Link href={'/product/dkp-31549/GalaxyBudsFE'}><DivDiscountTwo imageSrc={'/discount/New-folder/New folder/908c3f6922ec35a.webp'}
                        productName={'هدفون بلوتوثی سامسونگ مدل Galaxy Buds FE'} discount={'8%'} count={'2700000'} numDiscount={'2479000'} /></Link>
                    <Link href={'/product/dkp-31549/KeyBoardMK270'}><DivDiscountTwo imageSrc={'/discount/New-folder/New folder/247685.webp'} 
                    productName={'کیبورد و ماوس بی‌سیم لاجیتک مدل MK270'} discount={'5%'} count={'1570000'} numDiscount={'1490000'} /></Link>
                   <Link href={'/product/dkp-31549/GerdoShekan'}> <DivDiscountTwo imageSrc={'/discount/New-folder/New folder/a99b349a0020441.webp'}
                     productName={'گردو شکن یونیور مدل Professional 300'} discount={'68%'} count={'1350000'} numDiscount={'432000'} /></Link>
                   <Link href={'/product/dkp-31549/BodySplashENDLESSFANTASY'}> <DivDiscountTwo imageSrc={'/discount/New-folder/New folder/c7fd8786201733963.webp'} 
                    productName={'بادی اسپلش زنانه مای مدل ENDLESS FANTASY حجم 220 میلی لیتر'} discount={'30%'} 
                    count={'205000'} numDiscount={'142900'} /></Link>
                    <Link href={'/product/dkp-31549/MonitorNexarNDM-22VN'}><DivDiscountTwo imageSrc={'/discount/New-folder/New folder/d63479e7720b08c393b.webp'} 
                    productName={'مانیتور نکسار مدل NDM-22VN سایز 22 اینچ'} discount={'6%'} count={'3800000'} numDiscount={'3560000'} /></Link>
                    <Link href={'/product/dkp-31549/BlueChanel'}><DivDiscountTwo imageSrc={'/discount/New-folder/24b16d4a2748a.webp'} 
                    productName={'ادو پرفیوم مردانه فراگرنس پرشیا 116 مدل بلو شنل حجم 100 میلی لیتر'} 
                    discount={'63%'} count={'680000'} numDiscount={'249500'} /> </Link>
                </div>

            </div>
            <div className='min-h-96 mt-10'>
                <WonderProduct />
            </div>
        </div>
        <Footer /></>);
}

export default incredibleOffers;
