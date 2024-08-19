import Image from 'next/image';
import Header from '@/components/header/index';
import Footer from '@/components/footer';

function Loading() {
    return ( <> <Header/>
   <div className='h-[400px]'>
   <div className="mx-auto mt-[170px] w-[200px] h-[150px] p-2 rounded-lg">
      <Image className='float-left ml-10 mt-8' src={"/logo.svg"} alt='logo' width={150} height={30}/>
    </div>
   </div>
    <Footer/>
    </>);
}

export default Loading;