
import Header from '@/components/header/index';
import Footer from '@/components/footer';
import Link from 'next/link';
import LoginIcon from '@mui/icons-material/Login';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CartList from '../../../components/cart/index';

const Cart: React.FC = () => {
 

  return (
    <>
      <Header />
      <div className='min-h-96 mt-6'>
        <div className='w-[70%] mx-auto'>
          <p className='inline-block text-red-600 mr-3 cursor-pointer underline underline-offset-[12px]'>سبد خرید</p>
          <hr className='my-2 border-stone-300' />
          <div className='inline-block'>
          <CartList/>
          </div>
          <Link href={'/users/login'}>
            <div className='w-80 h-36 border inline-block  p-8 max-lg:hidden float-left'>
              <LoginIcon className='text-yellow-500' />
              <h1 className='inline-block font-bold mr-2'>ورود به حساب کاربری</h1>
              &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<KeyboardBackspaceIcon className='opacity-75' /><br />
              <small className='text-stone-700'>برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید وارد شوید.</small>
            </div>
          </Link>
        </div>
      </div>
      <div className='max-lg:hidden'><Footer /></div>
    </>
  );
}

export default Cart;
 