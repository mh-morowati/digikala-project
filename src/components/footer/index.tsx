/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailDaily from './email/index';
import FooterResponsive from './footer-responce';


function Footer() {
    return (<div>
        <div className='hidden max-lg:inline-block'>
            <FooterResponsive/>
        </div>
    <div className='max-lg:hidden'>
        <hr className="border-zinc-400 my-7" />
        <div className='px-4'>
            <Image src={"/digi.svg"} alt='digi' width={115} height={30} /> <br />
            <small>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ &nbsp;&nbsp;|&nbsp;&nbsp; ۰۲۱-۹۱۰۰۰۱۰۰ &nbsp;&nbsp;|&nbsp;&nbsp;
                ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</small>
        </div>
        <div className='my-16 w-[83%] mx-auto flex justify-between text-sm cursor-default'>
            <div className='inline-block'>
                <Image src={"/footer/express-delivery.svg"} alt='express-delivery' width={56} height={56} />
                <small className='opacity-85 left-5 relative'>امکان تحویل اکسپرس</small>
            </div>
            <div className='inline-block'>
                <Image src={"/footer/cash-on-delivery.svg"} alt='cash-on-delivery' width={56} height={56} />
                <small className='opacity-85 left-5 relative'>امکان پرداخت در محل</small>
            </div>
            <div className='inline-block'>
                <Image src={"/footer/support.svg"} alt='support' width={56} height={56} />
                <small className='opacity-85 left-5 relative'>7روزهفته,24ساعته</small>
            </div>
            <div className='inline-block'>
                <Image src={"/footer/days-return.svg"} alt='days-return' width={56} height={56} />
                <small className='opacity-85 left-5 relative'>7روزضمانت بازگشت کالا</small>
            </div>
            <div className='inline-block'>
                <Image src={"/footer/original-products.svg"} alt='original-products' width={56} height={56} />
                <small className='opacity-85 left-5 relative'>ضمانت اصل بودن کالا</small>
            </div>
        </div>
        {/*با دیجی کالا*/}
        <div className='my-16 mx-auto px-6 flex justify-between'>
            <div className='inline-block leading-10'>
                <h1><b className='text-zinc-700'>با دیجی‌کالا</b></h1>
                <p className='text-zinc-500 cursor-default'>اتاق خبر دیجی‌کالا</p>
                <p className='text-zinc-500 cursor-default'>فروش در دیجی‌کالا</p>
                <p className='text-zinc-500 cursor-default'>فرصت‌های شغلی</p>
                <p className='text-zinc-500 cursor-default'>گزارش تخلف در دیجی‌کالا</p>
                <p className='text-zinc-500 cursor-default'>تماس با دیجی‌کالا</p>
                <p className='text-zinc-500 cursor-default'>درباره دیجی‌کالا</p>
            </div>
            <div className='inline-block leading-10'>
               
            </div>
            <div className='inline-block leading-10'>
           
            </div>
            <div className='inline-block leading-10'>
                <h1 className='my-4'><b className='text-zinc-700'>همراه ما باشید!</b></h1>
                <InstagramIcon className='opacity-50 h-8 w-8 ml-10 cursor-default' />
                <XIcon className='opacity-50 h-8 w-8 ml-10 cursor-default' />
                <LinkedInIcon className='opacity-50 h-8 w-8 ml-10 cursor-default' />
                <EmailDaily/>
            </div>

        </div>
        {/*دانلود اپلیکیشن*/}
        <div className='bg-[rgb(60,75,109)] w-[97%] h-[74px] mx-auto mb-10 rounded-md p-4'>
            <img className='inline-block' src="/footer\footerlogo2.webp" alt="footerlogo2" width={46} />
            <h1 className='text-xl text-white inline-block mr-4'>دانلود اپلیکشن دیجی کالا</h1>
            <div className='inline-block float-left'>
                <Image className='inline-block mr-4 cursor-default' src={"/footer/coffe-bazzar.svg"} alt='coffe-bazzar' width={142} height={44} />
                <Image className='inline-block mr-4 cursor-default' src={"/footer/myket.svg"} alt='myket' width={142} height={44} />
                <Image className='inline-block mr-4 cursor-default' src={"/footer/sib-app.svg"} alt='sib-app' width={142} height={44} />
            </div>
        </div>
        <hr className='my-2 border w-[97%] mx-auto' />
        {/*توضیحات */}
        <div className='mb-24'>
        <div className='px-8 w-[70%] inline-block'>
            <h1 className='text-xl text-zinc-700 mb-2'><b>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
            </b></h1>
            <div className='text-sm text-zinc-500 leading-8'>
            <p>یک خرید اینترنتی مطمئن،
                    نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
                    مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه
                    اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.</p>
                
                <details>
                <summary className='mr-8 text-sky-800 cursor-pointer'>مشاهده بیشتر</summary>
                    <p>یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست

                        کدام محصولات در دیجی‌کالا قابل سفارش هستند؟</p>
                    <p>تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر
                        مجموعه‌های
                        پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم که امکان ارسال امروز برای آن ها وجود دارد. </p>
                    <p>کالای دیجیتال

                    </p>
                    <p>انواع گوشی موبایل از برندهای مختلفی مثل آیفون،  گوشی سامسونگ، گوشی نوکیا، گوشی شیائومی، گوشی هواوی، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل تبلت سامسونگ نوت 10، انواع هندزفری مثل هندزفری بی سیم، تلوزیون از برندهای مختلف مثل تلویزیون سامسونگ،
                        سونی و...، انواع مانیتور، کیس، کیبورد،
                        مودم
                        از برندهای مختلف مثل مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.</p>
                    <p>خودرو، ابزار و تجهیزات صنعتی

                    </p>
                    <p>انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو
                        مثل سیستم
                        صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و لوازم مصرفی خودرو مثل کفپوش سانا در این گروه قرار می‌گیرند.</p>
                    <p>مد و پوشاک

                    </p>
                    <p>محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و
                        روسری و... جزو مواردی هستند که
                        می‌توانید آن‌ها را از برندهای مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و... خریداری کنید.</p>
                    <p>اسباب بازی کودک و نوزاد

                    </p>
                    <p>در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش، تبلت، اسباب‌بازی، لوازم اتاق خواب کودک،
                        لوازم ایمنی، لوازم شخصی و غذا خوری و ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل کند.</p>
                    <p>کالاهای سوپر مارکتی

                    </p>
                    <p>هر چیزی از مواد خوراکی که به آن نیاز دارید، در سوپرمارکت دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل کره بادام‌زمینی، عسل، سس، قهوه،
                        زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل نستله،
                        نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.</p>
                    <p>زیبایی و سلامت

                    </p>
                    <p>انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع
                        شامپو، کرم، ماسک صورت، ضد تعریق، ماسک مو  و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری، انواع زیورآلات طلا و نقره مثل سرویس طلا، سرویس نقره و... به همراه وسایل
                        مراقبت شخصی طبی در گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند.</p>
                    <p>خانه و آشپزخانه

                    </p>
                    <p>یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع مبل
                        راحتی، انواع آبگرمکن مثل آبگرمکن بوتان، لباسشویی‌های متنوع مثل انواع لباسشویی اسنوا، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای
                        مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند.
                    </p>
                    <p>کتاب، لوازم تحریر و هنر

                    </p>
                    <p>بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله، کتاب زبان،
                        بازی، لوازم تحریر با طرح‌های
                        مختلف مانند
                        دختر کفشدوزکی، سازهایی مثل پیانو، سنتور، هنگ درام  و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار دارند.</p>
                    <p>ورزش و سفر

                    </p>
                    <p>هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و
                        کوهنوردی، ساک و قمقمه ورزشی و... در این بخش قرار می‌گیرند. همچنین شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی،
                        بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید.</p>
                    <p>محصولات بومی و محلی

                    </p>
                    <p>و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین هنر
                        ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند.
                        در این بخش شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به سفره هفت‌سین  و پذیرایی از مهمانان در روزهای نوروز، انواع
                        آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید.
                        همچنین در صفحه برچسب ها، امکان مشاهده و خرید انواع محصولات با طرح های بومی وجود دارد.  دیجی‌کالا همچنین برای اینکه حال و هوای عید
                        را به اعضای خود هدیه کند، تقویم ۱۴۰۱، انواع ایده عکس پروفایل عید نوروز، آهنگ‌های عید نوروز و موزیک‌های شاد بهاری، وسایل مربوط به
                        خانه‌تکانی
                        و انواع لباس های عید
                          را برای شما فراهم کرده است تا بتوانید در کنار خرید خود، از این حال و هوای تازه نهایت لذت را ببرید.</p>
                </details>
            </div>
        </div>
        <div className='inline-block w-[28%] float-left'>
            <img className='inline-block cursor-default mx-8' src={"/footer/lic/kasbokar.webp"} alt="kasbokar" width={75} height={75} />
            <Image className='inline-block cursor-default mx-8' src={"/footer/lic/rezi.webp"} alt="rezi" width={75} height={75} />
            <Image className='inline-block cursor-default mx-8' src={'/footer/lic/logo.png'} alt='logo' width={75} height={75}/>

        </div>
        </div>
        <div className='text-center my-10'>
            <footer className='text-xs text-slate-600'>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز 
                برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</footer>
        </div>
        </div>
    </div>);
}

export default Footer;