import ProfileHeader from '@/components/profile/header';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useState } from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';


function Profile() {
    return ( <div>
   <ProfileHeader/>
   <div>
    <aside className='w-[320px] h-[850px] border border-current rounded inline-block mr-32 mt-10 p-4'>
        
    <h1>محمد سحاب مروتی<ArrowBackIosIcon className='h-4 mr-20' /></h1>
                <hr className='mt-8 mb-3' />
                <h1>دیجی کلاب <span className='mr-32'>1
                    <span className='text-zinc-400 text-xs'>امتیاز</span></span></h1>
                    <small className='text-sky-500 my-1'>مشاهده ماموریت ها<ArrowBackIosIcon className='h-3'/></small>
                <hr className='my-3' />
                <h1 className='text-zinc-300'><StarRateIcon className=' ml-2' />دیجی پلاس 
                    <span className='mr-10 text-xs text-fuchsia-600'>خرید اشتراک<ArrowBackIosIcon className='h-3' /></span></h1>
                <hr className='my-3' />
                <h1 className='text-zinc-700'><ShoppingBagIcon className=' ml-2' />سفارش ها</h1>
                <hr className='my-3' />
                <h1 className='text-zinc-700'><FavoriteBorderIcon className=' ml-2' />لیست ها</h1>
                <hr className='my-3' />
                <h1 className='text-zinc-700'><ChatBubbleOutlineIcon className=' ml-2' />دیدگاه ها و پرسش ها</h1>
                <hr className='my-3' />
                <h1 className='text-zinc-700'><NotificationsNoneIcon className=' ml-2' />پیغام ها 
                <span className='mr-20 bg-red-500 py-1 px-2 text-white rounded-md font-serif text-base'>۲۸</span></h1>
                <hr className='my-3' />
                <Link href={'/'}>
                <h1 className='text-zinc-700'><LogoutIcon className=' ml-2' />خروج از حساب کاربری</h1>
                </Link>
    </aside>
   </div>
    </div> );
}

export default Profile;