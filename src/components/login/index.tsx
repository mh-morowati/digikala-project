'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface LoginApiProps {}

const LoginApi: React.FC<LoginApiProps> = () => {
  const [inform,setInform] = useState("");
  const [message,setMassage] = useState('');
  const [step, setStep] = useState<number>(1);
  const [emailOrNumber, setEmailOrNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

 const onclick = ()=>{
  setInform('hidden')
 }
  const validateEmailOrNumber = (input: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^09[0-9]{9}$/; // Updated pattern to start with "091" and followed by 8 digits

    return emailPattern.test(input) || phonePattern.test(input);
  };

  
  const handleNextStep = () => {
    if (validateEmailOrNumber(emailOrNumber)) {
      setStep(2);
      setMassage('')
    } else {
      setMassage("لطفا یک شماره موبایل یا ایمیل معتبر وارد کنید");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`/api/login/1`, {
        emailOrNumber,
        password,
      });
      
      if (res.status === 200) {
        setMassage('');
        alert('ورود موفق');
        router.push('/');
        // Redirect or do something upon successful login
      }
    } catch (error) {
      setMassage("ورود ناموفق. رمز عبور نادرست است !!!");
    }
  };

  return (
    <>
    <div className={`absolute bg-zinc-200 w-80 top-14 text-left px-2 border rounded-lg border-zinc-300 ${inform}`}>
        <p>phoneNumber: 09121234567 | email: abcd123@gmail.com | password: 12345</p>
        <button className="bg-blue-700 px-7 font-bold text-white rounded-md ml-14 py-1" onClick={onclick}>OK</button>
      </div>
    <div>
      
      <div className='text-zinc-800'>
        <b className='text-xl'>
          {step === 1 ? "ورود | ثبت‌ نام " : "رمز عبور را وارد کنید"}
        </b><br /><br />
        <small>
          {step === 1 ? "سلام!" : ""}<br />
          {step === 1 ? "لطفا شماره موبایل یا ایمیل خود را وارد کنید" : ""}
        </small>
      </div>
      
      {step === 1 && (
        <input
          className='w-full p-3 border border-sky-500 mt-5 rounded-md'
          type="text"
          value={emailOrNumber}
          onChange={(e) => setEmailOrNumber(e.target.value)} />
      )}

      {step === 2 && (
        <input
          className='w-full p-3 border border-sky-500 mt-5 rounded-md'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      )}
      <small className="text-red-500">{message}</small>

      {step === 1 ? (
        <button
          className='w-full font-bold p-3 rounded-md bg-[rgb(239,64,86)] text-white relative top-14'
          onClick={handleNextStep}>
          ورود
        </button>
      ) : (
        <button
          className='w-full font-bold p-3 rounded-md bg-[rgb(239,64,86)] text-white relative top-14'
          onClick={handleLogin}>
          ورود
        </button>
      )}
      
    </div>
    </>
  );
};

export default LoginApi;


