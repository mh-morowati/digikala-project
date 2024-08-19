
interface propsTitle {
    mobile: boolean;
    digitalProduct: boolean;
    books: boolean;
    home: boolean;
    homeElectric: boolean;
    medical: boolean;
    car: boolean;
    tools: boolean;
    sport: boolean;
    giftCart: boolean;
    foods: boolean;
    child: boolean;
}

const TitleProduct: React.FC<propsTitle> = ({ mobile, digitalProduct, books, home, homeElectric, medical, car, tools, sport, giftCart, foods, child }) => {
    return (
        <>
            {mobile && (
                <div>
                    <ul className="inline-block">
                        <li className="hover:text-red-500"><h1>برندهای مختلف گوشی موبایل</h1></li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">اپل</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">سامسونگ</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">شیائومی</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">نوکیا</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گوشی ریلمی</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گوشی آنر</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گوشی موتورولا</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گوشی ناتینگ فون</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گوشی جی پلاس</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">هوآوی</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">جنرال لوکس</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گوگل</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گوشی وان پلاس</li>
                    </ul>

                    <ul className="inline-block mr-14">
                        <li className="hover:text-red-500"><h1>داغ ترین ها</h1></li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گلکسی S23 Ultra</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گلکسی A54</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گلکسی A34</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گلکسی A24</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گلکسی A14</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گلکسی S23 Fe</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ردمی نوت12</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">پوکو C40</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">پوکو X5 Pro 5G</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ردمی A2 Plus</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">پوکو M5s</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">آنر X9a</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">موتورولا moto E13</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">جی پلاس Q20s</li>
                        <li className="text-sm text-zinc-500 my-4 hover:text-red-500">جدیدترین محصولات اپل</li>
                    </ul>
                </div>
            )}
            {digitalProduct && (
                <div>
                <ul className="inline-block">
                    <li className="hover:text-red-500"><h1>لپ تاپ</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> لپ‌ تاپ ایسوس</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">لپ‌ تاپ لنوو</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">مک بوک</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">لپ‌ تاپ HP</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> لپ‌ تاپ دل</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> لپ‌ تاپ ایسر</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">لپ‌ تاپ ام اس آی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">گوشی ناتینگ فون</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">لپ‌ تاپ کاستوم</li>

                </ul>

                <ul>
                    <li className="hover:text-red-500"><h1>لوازم جانبی لپ تاپ</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">شارژر لپ‌ تاپ</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> کیف لپ‌ تاپ</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> کول پد</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">استیکر لپ‌ تاپ</li>
                </ul>
                <ul>
                    <li className="hover:text-red-500"><h1> کنسول بازی</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ps5</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">xbox</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ps4</li>
                </ul>
                <ul>
                    <li className="hover:text-red-500"><h1>وسایل گیمینگ</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> دسته بازی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> فرمان بازی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> دیسک های بازی</li>
                </ul>
                <ul>
                    <li className="hover:text-red-500"><h1>کامپیوتر</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">all in one</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> mini pc</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> قلم نوری</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> رم ریدر</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> ماوس پد</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> کیس اسمبل شده</li>
                </ul>
                <ul>
                    <li className="hover:text-red-500"><h1> کیبورد</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> کیبورد گیمینگ</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> کیبورد بی سیم</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> کیبورد مکانیکال</li>
                </ul>
            </div>
            )}
            {books && (
                 <div>
                 <ul className="inline-block">
                     <li className="hover:text-red-500"><h1>کتاب و مجله</h1></li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کتاب چاپی</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">مجلات خارجی و داخلی</li>
                 </ul>
 
                 <ul>
                     <li className="my-4 hover:text-red-500"><h1>کتاب صوتی</h1></li>
                 </ul>
                 <ul>
                     <li className="hover:text-red-500"><h1>محتوای آموزشی</h1></li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">آموزش موسیقی</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">آموزش ورزش و سرگرمی</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">آموزش زبان</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">آموزش نرم افزار و کامپیوتر</li>
                 </ul>
                 <ul>
                     <li className="my-4 hover:text-red-500"><h1>نرم افزار</h1></li>
                 </ul>
                 <ul>
                     <li className="my-4 hover:text-red-500"><h1>بازی کنسول و کامپیوتر</h1></li>
                
                 </ul>
                 <ul>
                     <li className="my-4 hover:text-red-500"><h1>فیلم سینمایی، سریال و مستند</h1></li>
                 </ul>
                 <ul>
                     <li className="my-4 hover:text-red-500"><h1> آلبوم موسیقی</h1></li>
                 </ul>
                
             </div>
            )}
            {home && (
                <div>
                <ul>
                    <li className="hover:text-red-500"><h1> ظروف پخت و پز</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500"> قابلمه و تابه</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">زودپز</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">سرویس پخت و پز</li>
                </ul>
                <ul>
                    <li className="hover:text-red-500"><h1>ابزار آشپزی</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ست کفگیر و ملاقه</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">چاقو</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">تخته گوشت</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ظرف و قالب یخ</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">قیف</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">صافی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">فندک آشپزخانه</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ترازوی آشپزخانه</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">پوکو X5 Pro 5G</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ردمی A2 Plus</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">پوکو M5s</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">آنر X9a</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">موتورولا moto E13</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">جی پلاس Q20s</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">جدیدترین محصولات اپل</li>
                </ul>
            </div> )}
            {homeElectric && (
                <div>
                <ul>
                    <li className="hover:text-red-500"><h1> صوتی و تصویری</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">تلویزیون</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ساندبار</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ویدیو پروژکتور</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">پخش کننده خانگی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">لوازم جانبی صوتی و تصویری</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ریموت کنترل</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">میز تلویزیون</li>
                </ul>
            </div>
            )}
            {medical && (
                <div>
                <ul>
                    <li className="hover:text-red-500"><h1>تجهیزات پزشکی</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کنترل دیابت</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">تجهیزات پزشکی تنفسی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">تجهیزات پزشکی حرفه ای</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">لوازم پزشک</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ماساژور</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">فشارسنج</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">پد و کیسه آب گرم</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ترازو</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">تشک و پتوی برقی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">تب سنج و دماسنج</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">دماسنج محیطی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">دستگاه های عمومی پزشکی</li>
                </ul>
            </div>
            )}
            {car && (
                 <div>
                 <ul>
                     <li className="hover:text-red-500"><h1>لوازم مصرفی خودرو</h1></li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">روغن موتور</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">فیلترها </li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">قطعات سرویسی</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">روغن گیربکس</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">روغن هیدرولیک</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ضدیخ و آب رادیاتور</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">باتری</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">لاستیک</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">مکمل سوخت و روغن</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">لوازم نظافت خودرو</li>
                 </ul>
             </div>
            )}
            {tools && (
                  <div>
                  <ul>
                      <li className="hover:text-red-500"><h1>ابزار برقی</h1></li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">دریل، پیچ گوشتی و آچار بکس </li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">فرز و سنگ رومیزی </li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">موتور برق</li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">مکنده - دمنده</li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">جاروبرقی صنعتی</li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارواش</li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">دستگاه جوش</li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">هویه</li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ابزار برش و تراشکاری</li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کمپرسور هوا</li>
                      <li className="text-sm text-zinc-500 my-4 hover:text-red-500">مولتی متر</li>
                  </ul>
              </div>
            )}
            {sport && (
               <div>
               <ul>
                   <li className="hover:text-red-500 my-4"><h1>ابزار برقی</h1></li>
                   <li className="hover:text-red-500 my-4"><h1>پوشاک ورزشی مردانه</h1></li>
                   <li className="hover:text-red-500 my-4"><h1>پوشاک ورزشی زنانه</h1></li>
                   <li className="hover:text-red-500 my-4"><h1>کفش ورزشی مردانه</h1></li>
                   <li className="hover:text-red-500 my-4"><h1>کفش ورزشی زنانه</h1></li>
                   <li className="hover:text-red-500 my-4"><h1>پوشاک ورزشی پسرانه</h1></li>
                   <li className="hover:text-red-500 my-4"><h1>پوشاک ورزشی دخترانه</h1></li>
                   <li className="hover:text-red-500 my-4"><h1>کفش ورزشی پسرانه</h1></li>
                   <li className="hover:text-red-500 my-4"><h1> کفش ورزشی دخترانه</h1></li>
                   <li className="hover:text-red-500 my-4"><h1>تجهیزات سفر</h1></li>
                   <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ساک و چمدان </li>
               </ul>
           </div>
            )}
            {giftCart && (
                <div>
                <ul className="inline-block">
                    <li className="hover:text-red-500"><h1>کارت هدیه براساس مناسبت</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه تولد</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه روز مادر</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه روز معلم</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه سالگرد</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه تشکر</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه دوستی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه ازدواج</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه نوزاد</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه خانه نو</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه فارغ التحصیلی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه عید نوروز</li>
                </ul>

                <ul className="inline-block mr-14">
                    <li className="hover:text-red-500"><h1>دکارت هدیه الکترونیکی براساس مناسبت</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی تولد</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی روز معلم</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی سالگرد</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی تشکر</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی عذرخواهی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی دوستی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی ازدواج</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی نوزاد</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی خانه نو</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی فارغ التحصیلی</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کارت هدیه الکترونیکی عید نورو</li>
                </ul>
            </div>
               
            )}

            {foods && (
                 <div>
                 <ul className="inline-block">
                     <li className="hover:text-red-500"><h1>کالاهای اساسی و خواربار</h1></li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ماکارونی</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">برنج</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">نبات</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">قند</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">شکر</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">رب گوجه</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">رب انار</li>

                     <li className="hover:text-red-500"><h1>چای و دمنوش</h1></li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">چای سیاه</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">چای سبز</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">دمنوش</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">چای ماسالا</li>

                     <li className="hover:text-red-500"><h1>قهوه</h1></li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">دانه قهوه</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">قهوه فوری </li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">قهوه اسپرسو</li>
                 </ul>
                 <ul className="inline-block mr-14">
                     <li className="hover:text-red-500"><h1>صبحانه</h1></li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">کره بادام زمینی</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">شکلات صبحانه </li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">غلات صبحانه</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">عسل</li>
                     
                     <li className="hover:text-red-500"><h1>نوشیدنی</h1></li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">آب معدنی</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">نوشابه</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">ماء الشعیر</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">انرژی زا</li>
                     <li className="text-sm text-zinc-500 my-4 hover:text-red-500">شربت و آبمیوه</li>
                 </ul>
             </div>
            )}
            {child && (
                <div>
                <ul className="inline-block">
                    <li className="hover:text-red-500"><h1>بهداشت و حمام کودک و نوزاد</h1></li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">پوشک</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">دستمال مرطوب</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">حوله</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">وان حمام نوزاد</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">مینی واش</li>
                    <li className="text-sm text-zinc-500 my-4 hover:text-red-500">شامپو کودک و نوزاد</li>
                </ul>
            </div>
            )}
        </>
    )
}

export default TitleProduct;