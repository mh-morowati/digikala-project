
interface ChildProps {
    discount: string;
    count: string;
    numDiscount:string;
  }

const Coust: React.FC<ChildProps> = ({discount,count,numDiscount}) => {
    return ( <div>
           <div className="bg-gray-50 px-4 py-5  text-left float-left">
           <dl>
           <dt className="text-sm font-medium text-gray-500"></dt>
           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className='bg-slate-200 text-red-600 rounded-3xl py-[2px] px-1 mr-5 text-lg font-bold'>{discount}</span>
                <small className='line-through opacity-65'>{count}</small><br />
                <b><span className='text-xl'>{numDiscount}</span> &nbsp;
                  <small>تومان</small></b></dd>
           </dl>
            </div>
    </div> );
}

export default Coust;