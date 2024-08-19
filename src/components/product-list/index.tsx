'use client'
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ChairIcon from '@mui/icons-material/Chair';
import KitchenIcon from '@mui/icons-material/Kitchen';
import HealingIcon from '@mui/icons-material/Healing';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import BuildIcon from '@mui/icons-material/Build';
import HikingIcon from '@mui/icons-material/Hiking';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { useState } from 'react';
import TitleProduct from './title-product/index';


function ProductList() {
  const [showProductList, setShowProductList] = useState(false);
  const [mobile, setMobile] = useState(true);
  const [digitalProduct, setDigitalProduct] = useState(false);
  const [books, setBooks] = useState(false);
  const [home, setHome] = useState(false);
  const [homeElectric, setHomeElectric] = useState(false);
  const [medical, setMedical] = useState(false);
  const [car, setCar] = useState(false);
  const [tools, setTools] = useState(false);
  const [sport, setSport] = useState(false);
  const [giftCart, setGiftCart] = useState(false);
  const [foods, setFoods] = useState(false);
  const [child, setChild] = useState(false);


  return (<>
    <div className='inline-block border-l pl-4 cursor-pointer z-50'
      onMouseEnter={() => setShowProductList(true)}
      onMouseLeave={() => setShowProductList(false)}>

      <MenuIcon className='h-4 mr-3 ' /><b className='hover:underline underline-offset-[14px] decoration-red-500'>دسته‌بندی کالاها</b>
      {showProductList && (
        <>
        <div className="absolute w-[900px] h-[510px] mr-5 pt-2 overflow-y-auto rounded-bl-lg bg-white z-[50000000]"
          onMouseEnter={() => setShowProductList(true)}
          onMouseLeave={() => setShowProductList(false)}>
          <div className='mt-3 mr-3 w-[25%] inline-block bg-slate-200'>

            <ul className='z-[50000000]'>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
              onMouseEnter={() => {setMobile(true) ,setDigitalProduct(false),setBooks(false),setHome(false),setHomeElectric(false),
                setMedical(false),setCar(false),setTools(false),setSport(false),setGiftCart(false),setFoods(false),setChild(false)
              }
              }>
                <PhoneIphoneIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>موبایل</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
              onMouseEnter={() => {setMobile(false) ,setDigitalProduct(true),setBooks(false),setHome(false),setHomeElectric(false),
                setMedical(false),setCar(false),setTools(false),setSport(false),setGiftCart(false),setFoods(false),setChild(false)
              }
              }
              ><LaptopIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>کالای دیجیتال</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
                onMouseEnter={() => {setMobile(false) ,setDigitalProduct(false),setBooks(true),setHome(false),setHomeElectric(false),
                  setMedical(false),setCar(false),setTools(false),setSport(false),setGiftCart(false),setFoods(false),setChild(false)
                }
                }
              ><DesignServicesIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>کتاب, لوازم تحریر</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
               onMouseEnter={() => {setMobile(false) ,setDigitalProduct(false),setBooks(false),setHome(true),setHomeElectric(false),
                setMedical(false),setCar(false),setTools(false),setSport(false),setGiftCart(false),setFoods(false),setChild(false)
              }
              }
              ><ChairIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>خانه وآشپزخانه</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
               onMouseEnter={() => {setMobile(false) ,setDigitalProduct(false),setBooks(false),setHome(false),setHomeElectric(true),
                setMedical(false),setCar(false),setTools(false),setSport(false),setGiftCart(false),setFoods(false),setChild(false)
              }
              }
              ><KitchenIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>لوازم خانگی برقی</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
              onMouseEnter={() => {setMobile(false) ,setDigitalProduct(false),setBooks(false),setHome(false),setHomeElectric(false),
                setMedical(true),setCar(false),setTools(false),setSport(false),setGiftCart(false),setFoods(false),setChild(false)
              }
              }
              ><HealingIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>تجهیزات پزشکی و سلامت</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
                 onMouseEnter={() => {setMobile(false) ,setDigitalProduct(false),setBooks(false),setHome(false),setHomeElectric(false),
                  setMedical(false),setCar(true),setTools(false),setSport(false),setGiftCart(false),setFoods(false),setChild(false)
                }
                }
              ><DirectionsCarFilledIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>خودرو و موتورسیکلت</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
               onMouseEnter={() => {setMobile(false) ,setDigitalProduct(false),setBooks(false),setHome(false),setHomeElectric(false),
                setMedical(false),setCar(false),setTools(true),setSport(false),setGiftCart(false),setFoods(false),setChild(false)
              }
              }
              ><BuildIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>ابزارآلات و تجهیزات</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
                onMouseEnter={() => {setMobile(false) ,setDigitalProduct(false),setBooks(false),setHome(false),setHomeElectric(false),
                  setMedical(false),setCar(false),setTools(false),setSport(true),setGiftCart(false),setFoods(false),setChild(false)
                }
                }
              ><HikingIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>ورزش و سفر</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
                onMouseEnter={() => {setMobile(false) ,setDigitalProduct(false),setBooks(false),setHome(false),setHomeElectric(false),
                  setMedical(false),setCar(false),setTools(false),setSport(false),setGiftCart(true),setFoods(false),setChild(false)
                }
                }
              ><CardGiftcardIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>کارت هدیه و گیفت کارت</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
               onMouseEnter={() => {setMobile(false) ,setDigitalProduct(false),setBooks(false),setHome(false),setHomeElectric(false),
                setMedical(false),setCar(false),setTools(false),setSport(false),setGiftCart(false),setFoods(true),setChild(false)
              }
              }
              ><FastfoodIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>کالای خوراکی و اساسی</h1>
              </li>
              <li className='mt-7 hover:cursor-pointer hover:bg-white hover:text-red-600'
                onMouseEnter={() => {setMobile(false) ,setDigitalProduct(false),setBooks(false),setHome(false),setHomeElectric(false),
                  setMedical(false),setCar(false),setTools(false),setSport(false),setGiftCart(false),setFoods(false),setChild(true)
                }
                }
              ><ChildCareIcon /> <h1 className='inline-block text-xs font-bold text-stone-800 hover:text-red-600'>اسباب بازی,کودک و نوزاد</h1>
              </li>
            </ul>
          </div>
          <div className='inline-block w-[70%] float-left mt-3 cursor-default'>

            <TitleProduct mobile={mobile} digitalProduct={digitalProduct} books={books} home={home} homeElectric={homeElectric} medical={medical} car={car} tools={tools} sport={sport}
              giftCart={giftCart} foods={foods} child={child} />
          </div>
        </div></>
      )}
    </div>
  </>);
}

export default ProductList;