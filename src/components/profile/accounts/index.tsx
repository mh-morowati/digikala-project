"use client"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useEffect, useRef, useState } from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';

function Acount() {
    const [showAccount, setShowAccount] = useState<boolean>(false);
    const accountRef = useRef<HTMLDivElement>(null);

    const onclick = () => {
        setShowAccount(prev => !prev);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(accountRef.current && !accountRef.current.contains(event.target as Node)){
                setShowAccount(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [accountRef])
    
    return (<>
        <div onClick={onclick}>
            <PersonOutlineIcon className='w-8 h-8 opacity-95' />
            <ArrowDropDownIcon className='opacity-75' />
        </div>
        {
            showAccount && (<div className='absolute w-[250px] h-[420px] border bg-white z-[588888888] left-20 shadow-xl
        text-right p-3 text-zinc-700 text-sm'>
                <h1>محمد سحاب مروتی<ArrowBackIosIcon className='h-4 mr-20' /></h1>
                <hr className='mt-8 mb-3' />
                <h1><WorkspacePremiumIcon className='text-yellow-500 ml-2' />دیجی کلاب <span className='mr-20'>1
                    <span className='text-zinc-400 text-xs'>امتیاز</span></span></h1>
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
                <h1 className='text-zinc-700 hover:bg-slate-300'><LogoutIcon className=' ml-2' />خروج از حساب کاربری</h1>
                </Link>

            </div>)
        }
    </>);
}

export default Acount;