import Image from 'next/image'
import PercentIcon from '@mui/icons-material/Percent'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import DiscountIcon from '@mui/icons-material/Discount'
import LoginIcon from '@mui/icons-material/Login'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'
import Location from '../location/index'
import ProductList from '../product-list/index'
/* eslint-disable @next/next/no-img-element */
import HomeIcon from '@mui/icons-material/Home'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'


function Header() {

  return (<div
    className="h-44 border border-zinc-300 max-lg:h-32 max-lg:border-none"
  >
    <div className='fixed bg-white z-50 max-lg:relative'>
      <div className="h-16 2xl:mb-5">
        <img src="/880178.gif" alt="" />
      </div>

      <div className='inline-block'>
        <Link href={'/'}>
          <Image
            className='my-2 inline-block mr-2 max-lg:hidden'
            src={"/logo.svg"}
            alt='logo'
            width={115}
            height={30}
          />
        </Link>

        <div className='inline-block max-lg:absolute max-lg:w-full'>
          <button className='relative right-[60px]'>
            <SearchIcon className='opacity-50' />
          </button>
          <input
            className='w-[600px] p-2 border-none rounded-md bg-[rgb(240,240,241)] 
        mr-6 pr-10 max-lg:w-[85%] max-lg:rounded-3xl'
            type="text"
            placeholder='جستجو'
          />
        </div>
      </div>

      <div className='inline-block float-left max-lg:hidden'>
        <div className='inline-block border-l pl-3 border-zinc-300'>

          <Link href={'/users/login'}>
            <button className="bg-white font-bold py-2 px-3 rounded-md
             border-zinc-400 border opacity-90 cursor-pointer"
            >
              <LoginIcon className='float-left' />
              <small>&nbsp;ورود &nbsp;</small>|
              <small> &nbsp;ثبت نام &nbsp;</small>

            </button>
          </Link>
        </div>

        <div className='inline-block mx-4'>
          <Link href={'/checkout/cart'}>
            <LocalGroceryStoreIcon className='opacity-85 cursor-pointer' />
          </Link>
        </div>
      </div>
    </div>

    <div className='mt-[106px] max-lg:hidden'>
      <div className='p-2 inline-block'>
        <div>
          <div className='mt-5'>
            <ProductList />
            <Link href={'/incredible-offers'}>
              <PercentIcon className='h-4 mr-2 opacity-70 cursor-pointer ' />
              <small
                className='cursor-pointer hover:underline underline-offset-[14px]
             decoration-red-500'
              >
                شگفت‌انگیزها
              </small>
            </Link>

            <ShoppingBasketIcon className='h-4 mr-4 opacity-70 ' />
            <small
              className='cursor-default hover:underline underline-offset-[14px]
             decoration-red-500'
            >
              سوپرمارکت
            </small>
            <CardGiftcardIcon
              className='h-4 mr-4 opacity-70 '
            />
            <small className='cursor-default hover:underline 
             underline-offset-[14px] decoration-red-500'
            >
              کارت هدیه
            </small>
            <WhatshotIcon
              className='h-4 mr-4 opacity-70 ' />
            <small className='cursor-default hover:underline underline-offset-[14px]
              decoration-red-500'
            >پرفروش‌ترین‌ها
            </small>
            <div className='inline-block border-l pl-4 cursor-default'>
              <DiscountIcon className='h-4 mr-4 opacity-70 ' />
              <small className=' hover:underline underline-offset-[14px]
               decoration-red-500'>تخفیف‌ها و پیشنهادها</small></div>
            <small className='mr-4 cursor-default hover:underline underline-offset-[14px]
             decoration-red-500'
            >سوالی دارید؟
            </small>
            <small className='mr-4 cursor-default hover:underline underline-offset-[14px]
             decoration-red-500'
            >در دیجی‌کالا بفروشید!
            </small>

          </div>
        </div>
      </div>

      <div className='inline-block float-left ml-4'>
        <div className='relative top-6'>
          <Location />

        </div>
      </div>
    </div>

    <div className='lg:hidden'>
      <div className="h-14 opacity-80 z-[6000000000] flex md:gap-64 mobile-l:gap-24 mobile-m:gap-20
    mobile-s:gap-14 fixed bg-white bottom-[0px] w-full "
      >
        <div className='inline-block sm:mr-9 mobile-l:mr-7 mobile-m:mr-5 mobile-s:mr-3'>
          <Link href={'/'}> <HomeIcon className='h-8 w-10' />
            <p><small>خانه</small></p></Link>
        </div>

        <div className='inline-block'>
          <Link href={'/checkout/cart'}> <LocalGroceryStoreIcon className='h-8 w-10' />
            <p><small>سبد خرید</small></p></Link>
        </div>
        <div className='inline-block'>
          <Link href={'/users/login'}>
            <PermIdentityIcon className='h-8 w-10' />
            <p><small>دیجی کالای من</small></p>
            </Link>
        </div>
      </div>
    </div>
  </div>)
}

export default Header