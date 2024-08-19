"use client"
import React, { ChangeEvent, useState } from 'react';

function EmailDaily() {
    const [email, setEmail] = useState<string>('');
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

    const validateEmail = (email: string): boolean => {
        // Simple email regex for validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setEmail(email);
        setIsValidEmail(validateEmail(email));
    };
    return (<>
        <h1 className='my-4'><b className='text-zinc-700'>با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید</b></h1>
        <input type="email" className='rounded-md text-sm p-3 bg-[rgb(240,240,241)] ml-2' placeholder='ایمیل شما'
            value={email}
            onChange={handleEmailChange} />

        <button
            className={`px-4 py-1 rounded-md text-white ${isValidEmail ? 'bg-red-500' : 'bg-[rgb(224,224,226)]'
                }`}
                disabled={!isValidEmail}
        >
            ثبت
        </button>
    </>);
}

export default EmailDaily;