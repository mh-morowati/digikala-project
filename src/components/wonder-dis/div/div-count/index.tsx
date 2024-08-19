import Image from 'next/image';

interface ChildProps {
  imageSrc: string;
  productName: string;
  numDiscount: string;
}

const DivCount: React.FC<ChildProps> = ({ imageSrc, productName,numDiscount }: ChildProps) => {
  return (<div className="w-[200px] h-[354px] bg-white mx-1 inline-block text-center cursor-pointer hover:ring-1	">
    <div>
      <Image src={imageSrc} alt='' width={170} height={170} />
      <small>{productName}</small>
    </div>
    <div>
      <b><span className='text-sm text-stone-800'>{numDiscount}</span> &nbsp;
        <small>تومان</small></b>
    </div>
  </div>);
}

export default DivCount;