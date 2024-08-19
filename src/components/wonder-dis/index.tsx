import Image from 'next/image';
import DivDiscount from './div/index';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';


function WonderDiscount() {
    return ( <div>
        <div className='inline-block max-lg:hidden'>
        <Link href={'/incredible-offers'}><Image className='cursor-pointer' src={'/discount/Amazings.svg'} alt='Amazings' height={88} width={88}/></Link>
        <Link href={'/incredible-offers'}><Image className='mt-10 cursor-pointer' src={'/discount/Amazing.svg'} alt='Amazings' height={80} width={80}/></Link>
        <Link href={'/incredible-offers'}><p className='text-white text-sm mt-2 cursor-pointer'><b>مشاهده همه<ArrowBackIosIcon/></b></p></Link>
        </div>
        <div className='hidden max-lg:block'>
        <Link href={'/incredible-offers'}><Image className='mx-3 cursor-pointer inline-block' src={'/discount/Amazing.svg'} 
        alt='Amazings' height={24} width={24}/></Link>
         <Link href={'/incredible-offers'}><h1 className='inline-block text-white text-lg font-extrabold'>شگفت انگیز</h1></Link>
         <Link href={'/incredible-offers'}><p className='text-white text-sm cursor-pointer float-left'>
          <b>مشاهده همه<ArrowBackIosIcon className='ml-8 w-3'/></b></p></Link>
        </div>
        <div className='inline-block mr-8'>
            
          <Link href={'/product/dkp-31549/HandzferyTesco5072'}><DivDiscount  imageSrc = '/discount/New-folder/06d069a78de.webp' productName = 'هندزفری تسکو مدل 5072 ' discount = '26%' count = '122100' numDiscount = '90500' /></Link>
          <Link href={'/product/dkp-31549/mohafezElectricTimerdar'}><DivDiscount  imageSrc = '/discount/New-folder/7dc1e04579a3.webp' productName = 'محافظ برق هوشمند تایمردار' discount = '20%' count = '457000' numDiscount = '366000' /></Link>
          <Link href={'/product/dkp-31549/thinkGameHoger'}><DivDiscount  imageSrc = '/discount/New-folder/7e17645f1618bf8d42.webp' productName = 'بازی فکری هوگر' discount = '20%' count = '399000' numDiscount = '319000' /></Link>
          <Link href={'/product/dkp-31549/BlueChanel'}><DivDiscount  imageSrc = '/discount/New-folder/24b16d4a2748a.webp' productName = 'ادو پرفیوم مردانه فراگرنس' discount = '63%' count = '680000' numDiscount = '249500' /></Link>
          <Link href={'/product/dkp-31549/sonyConsolePlayer'}><DivDiscount   imageSrc = '/discount/New-folder/5189592.webp' productName = 'کنسول بازی سونی' discount = '9%' count = '19180000' numDiscount = '17399000' /></Link>
          <Link href={'/product/dkp-31549/mobilePhoneRenso'}><DivDiscount  imageSrc = '/discount/New-folder/b983be393008.webp' productName = 'گوشی موبایل رنسو' discount = '8%' count = '4999000' numDiscount = '4599000' /></Link>
          <Link href={'/product/dkp-31549/Text50Pages'}><DivDiscount  imageSrc = '/discount/New-folder/fb0ea59903b3c7e47804.webp' productName = 'دفتر مشق 50 برگ' discount = '20%' count = '407500' numDiscount = '326000' /></Link>
          
        </div>
        <div className="w-[100px] h-[208px] bg-white rounded mx-1 inline-block text-center relative bottom-28 max-lg:hidden">
            <div className='relative top-14'>
            <Link href={'/incredible-offers'}><button className='border-2 rounded-full border-sky-400 p-3'>
            <KeyboardBackspaceIcon className='text-sky-400 '/>
            </button></Link><br />
            <Link href={'/incredible-offers'}><p className='text-stone-900 mt-4 cursor-pointer'>مشاهده همه</p></Link>
            </div>
           </div>
    </div> );
}

export default WonderDiscount;