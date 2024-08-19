'use client';
import { useEffect, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import MyLocationIcon from '@mui/icons-material/MyLocation';

function Location() {
  const [showMessage, setShowMessage] = useState(false);
  const [showCityList, setShowCityList] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setShowMessage(true);
    };

    const handleMouseLeave = () => {
      setShowMessage(false);
    };

    const pElement = document.querySelector('.city-selection-text');
    pElement?.addEventListener('mouseenter', handleMouseEnter);
    pElement?.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup the event listeners on component unmount
    return () => {
      pElement?.removeEventListener('mouseenter', handleMouseEnter);
      pElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClick = () => {
    setShowCityList((prev) => !prev);
  };
  const closeCityListy = () => {
    setShowCityList(false)
  }

  const cities = ["آذربایجان شرقی", " آذربایجان غربی", "اردبیل", "اصفهان", "البرز", "ایلام", "بوشهر", "تهران", " چهار محال و بختیاری",
    " خراسان جنوبی", " خراسان رضوی", "  خراسان شمالی", "خوزستان", "زنجان", "سمنان", " سیستان و بلوچستان", "فارس", "قزوین", 'قم', 'کردستان',
    'کرمان', 'کرمانشاه', ' کهگیلویه و بویراحمد', 'گلستان', 'گیلان', 'لرستان', 'مازندران', 'مرکزی', 'هرمزگان', 'همدان', 'یزد'];

  return (
    <>
    <MyLocationIcon className='opacity-70 h-[22px] cursor-pointer' onClick={handleClick} />
      <p
        className="mt-2 mr-2 text-sm inline-block opacity-75 cursor-pointer city-selection-text"
        onClick={handleClick}
      >
        لطفا شهر خود را انتخاب کنید
      </p>
      {showMessage && (
        <div className="absolute bg-gray-700 text-white py-3 px-4 rounded-md">
          <small>لطفا شهر خود را انتخاب کنید</small>
        </div>
      )}
      {showCityList && (
        <ul className="absolute z-[1000000] bg-white border border-gray-300 rounded-md mt-2 h-96 overflow-y-scroll">
          <span>انتخاب شهر</span> <button onClick={closeCityListy} className="text-red-600 fixed left-12"><ClearIcon className="w-7 h-7" /></button><hr className="my-4" />
          <MyLocationIcon className="text-sky-500 my-4 ml-3" /><span className="text-sky-500">مکان‌یابی خودکار</span>
          {cities.map((city) => (
            <li key={city} className="py-2 px-4 cursor-pointer hover:bg-gray-200">
              {city}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Location;
