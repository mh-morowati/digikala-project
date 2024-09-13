import React from 'react';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Image from 'next/image';
import Coust from '../coust';

interface SidebarProps {
  discount: string;
  count: string;
  numDiscount: string;
  productName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ discount, count, numDiscount, productName }) => {

  const addToBasket = () => {
    const existingItems = JSON.parse(localStorage.getItem('basketItems') || '[]');
    const newItem = { productName, count };
    const updatedItems = [...existingItems, newItem];
    localStorage.setItem('basketItems', JSON.stringify(updatedItems));
  };

  return (
    <aside className="w-96 border bg-gray-100 p-4 inline-block float-left max-lg:w-full max-lg:fixed z-[55555555555555]">
      <div>
        <p className='font-bold opacity-90 my-4'>فروشنده</p>
        <Image className='inline-block ml-2' src={'/footer/footerlogo2.webp'} width={25} height={20} alt='footerlogo2' />
        <p className=' text-zinc-700 inline-block'>دیجی‌کالا </p>
      </div>
      <div>
        <Coust discount={discount} count={count} numDiscount={numDiscount} />
      </div>
      <div className="bg-white shadow rounded-lg p-4 text-center">
        <button className="w-2/3 bg-red-500 text-white p-2 rounded" onClick={addToBasket}>افزودن به سبد</button>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500"><GppGoodIcon /></dt>
            <dd className="mt-1 font-bold text-xs text-gray-700 sm:mt-0 sm:col-span-2">گارانتی اصالت و سلامت فیزیکی کالا</dd>
          </div>
        </dl>
      </div>
    </aside>
  );
};

export default Sidebar;
