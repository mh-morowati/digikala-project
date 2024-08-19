// pages/api/products/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next';

type Product = {
    id: string;
    productName: string;
    imageUrl: string;
    description: string;
    recommendationRate: string;
    count: string;
    disCount: string;
    numDisCount: string;
};

// Dummy data for example purposes
const products: Product[] = [
    {
        id: 'dermatipic-light-cream',
        productName: 'کرم آبرسان درماتیپیک مدل REFRESH',
        imageUrl: '/videos/pic/dermatipic.webp',
        description: 'حجم 50میلی لیتر',
        recommendationRate: 'ارسال رایگان',
        count: "250000",
        disCount: "25%",
        numDisCount: "187500"
    },
    {
        id: 's24',
        productName: 'گوشی موبایل سامسونگ مدل Galaxy S24 Ultra',
        imageUrl: '/videos/pic/download.jpg',
        description: 'دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت',
        recommendationRate: 'ارسال رایگان',
        count: "63499000",
        disCount: "3%",
        numDisCount: "61599000"
    },
    {
        id: 's23fe',
        productName: 'گوشی موبایل سامسونگ مدل Galaxy S23 FE',
        imageUrl: '/videos/pic/s23fe.jpg',
        description: 'دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام',
        recommendationRate: 'ارسال رایگان',
        count: "",
        disCount: "",
        numDisCount: "29320000"
    },
    {
        id: 'Galaxy-Tab-A8',
        productName: 'تبلت سامسونگ مدل Galaxy Tab A8 10.5 SM-X205',
        imageUrl: '/videos/pic/4afc270677c7ddd.jpg',
        description: 'ظرفیت 64 گیگابایت و رم 4 گیگابایت',
        recommendationRate: 'ارسال رایگان',
        count: "",
        disCount: "",
        numDisCount: "17790000"
    },
    {
        id: 'Galaxy-Z-Flip6',
        productName: 'گوشی موبایل سامسونگ مدل Galaxy Z Flip 6 ',
        imageUrl: '/videos/pic/galaxy-z-flip6.webp',
        description: 'تک سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت - ویتنام',
        recommendationRate: 'ارسال رایگان',
        count: "",
        disCount: "",
        numDisCount: "64990000"
    },
    {
        id: 'Galaxy-Z-Fold6',
        productName: 'گوشی موبایل سامسونگ مدل Galaxy Z Fold 6',
        imageUrl: '/videos/pic/galaxy-zfold8.webp',
        description: 'دوسیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت - ویتنام',
        recommendationRate: '۸۵% (۶۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "",
        disCount: "",
        numDisCount: "113990000"
    },
    {
        id: 'huaweiWatchFit',
        productName: "ساعت هوشمند هوآوی مدل FIT 3",
        imageUrl: '/landing-img/whatch/fb6d1445d60381e5.jpg',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۵% (۶۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "6999000",
        disCount: "10%",
        numDisCount: "6299000"
    },
    {
        id: 'GalaxyBudsFE',
        productName: " هدفون بلوتوثی سامسونگ مدل Galaxy Buds FE",
        imageUrl: '/discount/New-folder/New folder/908c3f6922ec35a.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "",
        disCount: "",
        numDisCount: "2479000"
    },
    {
        id: 'KeyBoardMK270',
        productName: 'کیبورد و ماوس بی‌سیم لاجیتک مدل MK270',
        imageUrl: '/discount/New-folder/New folder/247685.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "1570000",
        disCount: "5%",
        numDisCount: "1490000"
    },

    {
        id: 'GerdoShekan',
        productName: 'گردو شکن یونیور مدل Professional 300',
        imageUrl: '/discount/New-folder/New folder/a99b349a0020441.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "1350000",
        disCount: "68%",
        numDisCount: "432000"
    },
    {
        id: 'BodySplashENDLESSFANTASY',
        productName: 'بادی اسپلش زنانه مای مدل ENDLESS FANTASY حجم 220 میلی لیتر',
        imageUrl: '/discount/New-folder/New folder/c7fd8786201733963.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "205000",
        disCount: "30%",
        numDisCount: "142900"
    },
    {
        id: 'MonitorNexarNDM-22VN',
        productName: 'مانیتور نکسار مدل NDM-22VN سایز 22 اینچ',
        imageUrl: '/discount/New-folder/New folder/d63479e7720b08c393b.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "3800000",
        disCount: "6%",
        numDisCount: "3560000"
    },
    {
        id: 'BlueChanel',
        productName: 'ادو پرفیوم مردانه فراگرنس پرشیا 116 مدل بلو شنل حجم 100 میلی لیتر',
        imageUrl: '/discount/New-folder/24b16d4a2748a.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "680000",
        disCount: "63%",
        numDisCount: "249500"
    },
    {
        id: 'CeratinApovital',
        productName: 'کراتین آپوویتال- 250 گرم',
        imageUrl: '/discount/New-folder/product-img/5c82ed6388186d.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "100000",
        disCount: "66%",
        numDisCount: "299000"
    },
    {
        id: 'ChandRahiBargh',
        productName: 'چندراهی برق مدل کلید دار Tehran',
        imageUrl: '/discount/New-folder/product-img/6cd504984887b4a.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "49000",
        disCount: "23%",
        numDisCount: "37900"
    },
    {
        id: 'TraderPriceAction',
        productName: 'کتاب معامله گر پرایس اکشن اثر لنس بگز انتشارات کاسپین دانش',
        imageUrl: '/discount/New-folder/product-img/07df7e8fa4414.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "1250000",
        disCount: "32%",
        numDisCount: "850000"
    },
    {
        id: 'HaireSperyMegaHold',
        productName: 'اسپری حالت دهنده مو کاسپین مدل Mega Hold حجم 250 میلی لیتر',
        imageUrl: '/discount/New-folder/product-img/7ef0211e00f94a84b.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "97950",
        disCount: "19%",
        numDisCount: "79240"
    },
    {
        id: 'B-Complex',
        productName: 'شربت ب کمپلکس استارویت - 200 میلی لیتر',
        imageUrl: '/discount/New-folder/product-img/463e8471aafbd97.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "127600",
        disCount: "75%",
        numDisCount: "31500"
    },
    {
        id: 'HairCeratineMozila',
        productName: 'ماسک مو کراتینه موزیلا مدل فاقد سولفات حجم 500 میلی لیتر',
        imageUrl: '/discount/New-folder/product-img/7312ac009eed0480.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "349500",
        disCount: "43%",
        numDisCount: "199210"
    },
    {
        id: 'WomenAnti-sweat',
        productName: 'کرم ضد تعریق زنانه لامینین حجم 50 میلی لیتر',
        imageUrl: '/discount/New-folder/product-img/363268.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "115000",
        disCount: "35%",
        numDisCount: "75000"
    },
    {
        id: 'MensAntiSweat',
        productName: 'کرم ضد تعریق مردانه لامینین حجم 50 میلی لیتر',
        imageUrl: '/discount/New-folder/product-img/633991.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "115000",
        disCount: "35%",
        numDisCount: "75000"
    },
    {
        id: 'FaceWasherVitalir',
        productName: 'فوم شستشو صورت ویتالیر مدل سنسی ویت حجم 150 میلی لیتر',
        imageUrl: '/discount/New-folder/product-img/be92888d82b065.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "241300",
        disCount: "42%",
        numDisCount: "140000"
    },
    {
        id: 'BodySplashENDLESSFANTASY',
        productName: 'بادی اسپلش زنانه مای مدل ENDLESS FANTASY حجم 220 میلی لیتر',
        imageUrl: '/discount/New-folder/product-img/c7fd87862017339.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "205000",
        disCount: "30%",
        numDisCount: "142900"
    },
    {
        id: 'LadyLosionBody-Hidroderm',
        productName: 'لوسیون بدن هیدرودرم سری Lady مدل Multiple Action مناسب انواع پوست حجم 200 میلی لیتر',
        imageUrl: '/discount/New-folder/product-img/dc957a3683dcd384.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "124500",
        disCount: "46%",
        numDisCount: "67790"
    },
    {
        id: 'TextPaper',
        productName: 'کاغذ یادداشت پست ایت مدل شفاف بسته 60 عددی',
        imageUrl: '/discount/New-folder/product-img/239c9016895dfe552b894.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "95000",
        disCount: "20%",
        numDisCount: "76000"
    },
    {
        id: 'HandzferyTesco5072',
        productName: 'هندزفری تسکو مدل 5072 ',
        imageUrl: '/discount/New-folder/06d069a78de.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "122100",
        disCount: "26%",
        numDisCount: "90500"
    },
    {
        id: 'mohafezElectricTimerdar',
        productName: 'محافظ برق هوشمند تایمردار',
        imageUrl: '/discount/New-folder/7dc1e04579a3.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "457000",
        disCount: "20%",
        numDisCount: "366000"
    },
    {
        id: 'thinkGameHoger',
        productName: 'بازی فکری هوگر',
        imageUrl: '/discount/New-folder/7e17645f1618bf8d42.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "399000",
        disCount: "20%",
        numDisCount: "319000"
    },
    {
        id: 'sonyConsolePlayer',
        productName: 'کنسول بازی سونی',
        imageUrl: '/discount/New-folder/5189592.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "19180000",
        disCount: "9%",
        numDisCount: "17399000"
    },
    {
        id: 'mobilePhoneRenso',
        productName: 'گوشی موبایل رنسو',
        imageUrl: '/discount/New-folder/b983be393008.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "4999000",
        disCount: "8%",
        numDisCount: "4599000"
    },
    {
        id: 'Text50Pages',
        productName: 'دفتر مشق 50 برگ',
        imageUrl: '/discount/New-folder/fb0ea59903b3c7e47804.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "407500",
        disCount: "20%",
        numDisCount: "326000"
    },
    {
        id: 'SkirtSM-2123',
        productName: 'دامن زنانه مدل SM-2123',
        imageUrl: '/landing-img/new-style/5c9cb6109fe67c.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "",
        disCount: "",
        numDisCount: "290000"
    },
    {
        id: 'Skirt77777',
        productName: 'دامن زنانه مدل aramco',
        imageUrl: '/landing-img/new-style/d4367bbf4f63b57c0c.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "",
        disCount: "",
        numDisCount: "457000"
    },
    {
        id: 'Skirt6666',
        productName: 'دامن زنانه مدل بندی',
        imageUrl: '/landing-img/new-style/b1bc6d834e6cd.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "",
        disCount: "",
        numDisCount: "183000"
    },
    {
        id: 'Skirt5555',
        productName: 'دامن زنانه اسمارا مدل جین کاغذی 2022',
        imageUrl: '/landing-img/new-style/2959d9f7e07160.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "380000",
        disCount: "13%",
        numDisCount: "330000"
    },
    {
        id: 'Skirt44444',
        productName: 'دامن زنانه مدل ریون تمام کلوش کد a.056',
        imageUrl: '/landing-img/new-style/444e5e24b8224f0a.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "",
        disCount: "",
        numDisCount: "302000"
    },
    {
        id: 'Skirt33333',
        productName: 'دامن زنانه مدل تابستانه رنگ مشکی',
        imageUrl: '/landing-img/new-style/243de77fedd8b.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "298000",
        disCount: "10%",
        numDisCount: "268200"
    },
    {
        id: 'Skirt2568852',
        productName: 'دامن زنانه مدل کرپ پیلی کره ای کد2568852',
        imageUrl: '/landing-img/new-style/5c84d791a13038ba2.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "",
        disCount: "",
        numDisCount: "407000"
    },
    {
        id: 'Shirt-pCALI',
        productName: 'تی شرت آستین کوتاه مردانه تریکو پاییزان مدل pCALI',
        imageUrl: '/landing-img/new-style/shirt-boy/1e42b601b4cca5f2.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "498000",
        disCount: "37%",
        numDisCount: "312000"
    },
    {
        id: 'Shirt-T4S21',
        productName: 'تی شرت آستین کوتاه مردانه وستیتی مدل T4S',
        imageUrl: '/landing-img/new-style/shirt-boy/ea6baaa792b3e5.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "590000",
        disCount: "27%",
        numDisCount: "429000"
    },
    {
        id: 'Shirt14020828c',
        productName: 'تی شرت کلاه دار مردانه مدل 14020828c رنگ مشکی',
        imageUrl: '/landing-img/new-style/shirt-boy/84880ed306c59.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "374000",
        disCount: "21%",
        numDisCount: "295460"
    },
    {
        id: 'Shirt-T5S',
        productName: 'تی شرت آستین کوتاه مردانه وستیتی مدل T5S',
        imageUrl: '/landing-img/new-style/shirt-boy/2207af7a36f31068.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "590000",
        disCount: "27%",
        numDisCount: "429000"
    },
    {
        id: 'Shirt-NR1',
        productName: 'تی شرت آستین کوتاه مردانه مدل NR1',
        imageUrl: '/landing-img/new-style/shirt-boy/1142f04f7e33b72a13df.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "229000",
        disCount: "28%",
        numDisCount: "164880"
    },
    {
        id: 'ShirtUnd-Arm-B',
        productName: 'تی شرت آستین کوتاه مردانه مدل Und-Arm-B',
        imageUrl: '/landing-img/new-style/shirt-boy/69eeca4f8418039143.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "530000",
        disCount: "51%",
        numDisCount: "259800"
    },
    {
        id: 'watch1254',
        productName: 'ساعت مچی عقربه‌ای مردانه رومانسون مدل سه موتور',
        imageUrl: '/landing-img/new-style/watch/0c972d24d7b61885db.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "2500000",
        disCount: "38%",
        numDisCount: "1550000"
    },
    {
        id: 'watch-MR928G-55',
        productName: 'ساعت مچی عقربه‌ای مردانه پوداگار مدل MR928G',
        imageUrl: '/landing-img/new-style/watch/e6f468172397b3d6674.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "4000000",
        disCount: "40%",
        numDisCount: "2399000"
    },
    {
        id: 'watch-manRomanson',
        productName: 'ساعت مچی عقربه‌ای مردانه رومانسون مدل سه موتور',
        imageUrl: '/landing-img/new-style/watch/bec8cd418634d3aa3a70.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "",
        disCount: "",
        numDisCount: "1420000"
    },
    {
        id: 'watch-luxury615',
        productName: 'ساعت مچی عقربه‌ای مردانه پوداگار مدل 615 luxury',
        imageUrl: '/landing-img/new-style/watch/ab29564e6594d5.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "3200000",
        disCount: "41%",
        numDisCount: "1899000"
    },
    {
        id: 'watchPG005',
        productName: 'ساعت مچی عقربه ای زنانه پوداگار مدل 005 PG',
        imageUrl: '/landing-img/new-style/watch/a24088d6d04.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "2850000",
        disCount: "33%",
        numDisCount: "1899000"
    },
    {
        id: 'watchPG-726',
        productName: 'ساعت مچی عقربه ای زنانه پوداگار مدل PG 726',
        imageUrl: '/landing-img/new-style/watch/42114bf0e625b5bd740.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "3000000",
        disCount: "38%",
        numDisCount: "1847000"
    },
    {
        id: 'watchBF2011',
        productName: 'ساعت مچی عقربه‌ای مردانه سیتی زن مدل BF2011.51L',
        imageUrl: '/landing-img/new-style/watch/19a4d657d898b257.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "7080000",
        disCount: "30%",
        numDisCount: "4990000"
    },
    {
        id: 'ice-cofee571',
        productName: 'کافی میکس فوری کلاسیک آیس نسکافه - 20 گرم بسته 24 عددی ',
        imageUrl: '/landing-img/cofee/8dfe8845d692a.webp',
        description: 'ارسال رایگان برای اعضای دیجی‌پلاس',
        recommendationRate: '۸۱% (۸۳۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند',
        count: "222000",
        disCount: "15%",
        numDisCount: "188,700"
    },
    // Add more product objects here
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    const product = products.find((p) => p.id === id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}
