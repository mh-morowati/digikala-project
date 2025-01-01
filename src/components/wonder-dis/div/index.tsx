import Image from 'next/image'

interface ChildProps {
  imageSrc: string
  productName: string
  discount: string
  count: string
  numDiscount: string
}

const DivDiscount: React.FC<ChildProps> = (props: ChildProps) => {

  const { imageSrc, productName, discount, count, numDiscount } = props

  return (
  <div 
  className="w-[148px] h-[238px] bg-white rounded
   mx-1 inline-block text-center cursor-pointer "
  >
    <div>
      <Image src={imageSrc} alt='' width={148} height={148} />
      <small>{productName}</small>
    </div>

    <div>
      <b>
        <span className='text-sm text-stone-800'>{numDiscount}</span> 
        &nbsp;
        <small>تومان</small>
        </b>
    </div>

    <div>
    <span 
    className='bg-red-600 text-white rounded-3xl py-[2px] px-[2px] mr-5 text-xs font-bold'
    >
      {discount}
      </span>
    <small className='line-through opacity-65'>{count}</small>
    </div>
  </div>)
}

export default DivDiscount