'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';



function CartList() {
    const [basketItems, setBasketItems] = useState<string[]>([]);

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('basketItems') || '[]');
      setBasketItems(items);
    }, []);
    const clearBasket = () => {
        localStorage.removeItem('basketItems');
      };
     
    return ( <div>
        {basketItems.length > 0 ? (
            basketItems.map((item, index) => (
              <div key={index} className='w-[60%] border inline-block max-lg:border-none max-lg:mx-auto max-lg:block'>
                <p>{item}</p>
              </div> ))
          ) : (
            <div className='w-[70%] border inline-block max-lg:border-none max-lg:mx-auto max-lg:block'>
              <Image className='mx-auto' src={'/cart/empty-cart.svg'} alt='empty-cart' width={300} height={300} />
              <h1 className='text-xl relative right-48 max-lg:right-24 max-sm:right-14 max-sm:text-base max-mobile-l:text-sm max-mobile-l:right-7 max-mobile-m:text-xs'>سبد خرید شما خالی است!</h1>
            </div>
          )}
             <button className="w-2/3 bg-red-500 text-white p-2 rounded mt-2" onClick={clearBasket}>خالی کردن سبد</button>
    </div> );
}

export default CartList;