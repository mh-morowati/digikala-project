import Stories from '@/components/stories'
import ScrollingPictures from '@/components/scrol-pic'
import Footer from '@/components/footer'
import Header from '@/components/header'
import WonderDiscount from '@/components/wonder-dis'


export default function Home() {

  return (
 <>
 <Header/>
    <main className="min-h-[400px]">
      {/*استوریها */}
      <div 
      className='mr-32 mt-4 max-xl:h-[77px] max-lg:mr-1'
      >
        <Stories />
      </div>
    
      <div className='w-full h-[205px] max-lg:mt-2'>
        <ScrollingPictures/>
      </div>
      {/*پیشنهادهای شگفت انگیز*/}
      <div 
      className='h-72 bg-red-500 mt-64 rounded-xl mx-auto max-xl:w-[98%]
       max-lg:mt-44 max-md:mt-5 2xl:mt-96 flex'
       >
        <WonderDiscount/>
      </div>
    </main>
    <Footer/>
    </>
  )
}
