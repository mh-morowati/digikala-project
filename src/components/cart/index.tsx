'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';

interface BasketItem {
  productName: string;
  numDiscount: string;
}

function CartList() {
    const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
 

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('basketItems') || '[]');
      setBasketItems(items);

      const total = items.reduce((sum: number, item: BasketItem) => sum + parseInt(item.numDiscount) , 0);
        setTotalPrice(total);
    }, []);
    const clearBasket = () => {
        localStorage.removeItem('basketItems');
        setBasketItems([]);
        setTotalPrice(0);
      };
      const deleteItem = (index:number)=>{
        const updatedItems = basketItems.filter((_,i) => i !== index);
        localStorage.setItem('basketItems', JSON.stringify(updatedItems));
        setBasketItems(updatedItems);

        const total = updatedItems.reduce((sum: number, item: BasketItem) => sum + parseInt(item.numDiscount), 0);
        setTotalPrice(total);
      }
     
    return ( <div>
        {basketItems.length > 0 ? (
            basketItems.map((item, index) => (
              <div key={index} className='w-[70%] border inline-block max-lg:border-none max-lg:mx-auto max-lg:block py-2'>
                <p className='inline-block text-sm'>{item.productName} <span
                 className='font-bold text-xs border py-2 text-zinc-800 mr-3 bg-yellow-200'>{item.numDiscount}تومان</span></p>
                <span onClick={() => deleteItem(index)} className='mr-3 text-red-600 cursor-pointer'><DeleteIcon/></span>
              </div> ))
          ) : (
            <div className='w-[70%] border inline-block max-lg:border-none max-lg:mx-auto max-lg:block'>
              <Image className='mx-auto inline-block' src={'/cart/empty-cart.svg'} alt='empty-cart' width={200} height={200} />
              <h1 className='text-xl relative inline-block max-lg:right-24 max-sm:right-14 max-sm:text-base max-mobile-l:text-sm max-mobile-l:right-7 max-mobile-m:text-xs'>سبد خرید شما خالی است!</h1>
            </div>
          )}
           {basketItems.length > 0 && (
                <div className="mt-4">
                    <p className="text-lg font-bold">جمع کل: {totalPrice} تومان</p>
                </div>
            )}
             <button className="w-2/3 bg-red-500 text-white p-2 rounded mt-2" onClick={clearBasket}>خالی کردن سبد</button>
    </div> );
}

export default CartList;