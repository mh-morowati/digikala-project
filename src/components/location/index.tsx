'use client'
import { useEffect, useState } from "react"
import ClearIcon from '@mui/icons-material/Clear'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import axios from "axios"

interface ApiResponse {
  name: string
  id: number
}

interface City {
  cities: ApiResponse[]
}
function Location() {

  const [showMessage, setShowMessage] = useState(false)
  const [showCityList, setShowCityList] = useState(false)
  const [showCountyList, setShowCountyList] = useState(false)

  const [city, setCity] = useState('')
  const [county, setCounty] = useState<City[]>()
  const [smCity, setSmCity] = useState('')

  const onclick = (c: string) => {
    setCity(c)
  }

  const onclickSmCity = (c: string) => {
    setSmCity(c)
    setShowCountyList(false)
  }

  useEffect(() => {
    const handleMouseEnter = () => {
      setShowMessage(true)
    }

    const handleMouseLeave = () => {
      setShowMessage(false)
    }

    const pElement = document.querySelector('.city-selection-text')
    pElement?.addEventListener('mouseenter', handleMouseEnter)
    pElement?.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup the event listeners on component unmount
    return () => {
      pElement?.removeEventListener('mouseenter', handleMouseEnter)
      pElement?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleClick = () => {
    setShowCityList((prev) => !prev)
  }
  const closeCityListy = () => {
    setShowCityList(false)
  }

  const cities = ["آذربايجان شرقی", "آذربايجان غربی", "اردبيل", "اصفهان",
    "البرز", "ايلام", "بوشهر", "تهران", "چهارمحال بختیاری",
    "خراسان جنوبی", "خراسان رضوی", "خراسان شمالی", "خوزستان",
    "زنجان", "سمنان", "سيستان و بلوچستان", "فارس", "قزوين", "قم",
    "كردستان", "کرمان", "كرمانشاه", "كهكيلويه و بويراحمد", "گلستان",
    "گيلان", "لرستان", "مازندران", "مرکزی", "هرمزگان", "همدان", "يزد"]

  useEffect(() => {
    if (city) {
      setShowCityList(false)
      setSmCity('')
      const fetchCounty = async () => {
        try {
          const response = await axios.get(
            `https://iran-locations-api.ir/api/v1/fa/cities?state=${city}`
          )
          setCounty(response.data)
          setShowCountyList(true)
        } catch (err) {
          console.error(err);
        }
      }
      fetchCounty()
    }
  }, [city])

  return (
    <>
      <MyLocationIcon className='opacity-70 h-[22px] cursor-pointer' onClick={handleClick} />
      <p
        className="mt-2 mr-2 text-sm inline-block opacity-75 cursor-pointer city-selection-text w-[162px]"
        onClick={handleClick}
      >
        {city ? city + ", " + smCity : 'لطفاشهرخودرا انتخاب کنید'}
      </p>
      {showMessage && (
        <div className="absolute bg-gray-700 text-white py-3 px-4 rounded-md">
          <small>
            {city ? city + ", " + smCity : 'لطفاشهرخودرا انتخاب کنید'}
          </small>
        </div>
      )}

      {showCityList && (
        <ul className="absolute z-[1000000] bg-white border
         border-gray-300 rounded-md mt-2 h-96 overflow-y-scroll"
        >
          <span>انتخاب شهر</span>
          <button onClick={closeCityListy} className="text-red-600 fixed left-12">
            <ClearIcon className="w-7 h-7" />
          </button>
          <hr className="my-4" />
          <MyLocationIcon className="text-sky-500 my-4 ml-3" />
          <span className="text-sky-500">مکان‌یابی خودکار</span>
          {cities.map((city) => (
            <li
              key={city}
              className="py-2 px-4 cursor-pointer hover:bg-gray-200"
              onClick={() => onclick(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}

      {showCountyList && (
        <ul className="absolute z-[1000000] bg-white border
         border-gray-300 rounded-md mt-2 h-96 overflow-y-scroll"
        >
          <span>انتخاب شهر</span>
          <hr className="my-4" />
          {county?.map((city) => (
            city.cities.map((c) => (
              <li key={c.id}
                className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                onClick={() => onclickSmCity(c.name)}
              >
                {c.name}</li>
            ))
          ))}
        </ul>
      )}
    </>
  )
}

export default Location