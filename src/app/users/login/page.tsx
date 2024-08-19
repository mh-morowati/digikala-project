import Image from 'next/image';
import Link from "next/link";
import type { Metadata } from "next";
import LoginApi from '@/components/login';

export const metadata: Metadata = {
  title: "Login Page",
};

const Login: React.FC = () => {

  
  return (
    <div className=''>
      <div className="min-h-96 w-96 border rounded-md mx-auto mt-32 p-6 max-lg:w-full 2xl:w-[700px] 2xl:text-xl">
        <Link href={'/'}><Image className='mx-auto mt-3 2xl:w-64' src={"/logo.svg"} alt='logo' width={150} height={40} /></Link>
        <br />
       
        <div>
        <LoginApi/>
        </div>
      </div>
    </div>
  );
}

export default Login;
