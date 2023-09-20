import Image from "next/image";
// import { Inter, Agdasima } from 'next/font/google'
import Head from "next/head";
import { useState } from "react";
import Bg from "../Components/Bg"

export default function Home() {
  const [send, setSend] = useState(false);
  console.log(send);
  return (
    <>
      <Head>
        <title>FinEase</title>
        <link rel="icon" href="../assets/favi.avif" />
      </Head>
      <main
        className={`flex h-[100vh] w-[100vw] flex-col items-center p-6 justify-items-center m-0`}
      >
        <Bg/>
        <div className="flex justify-center text-9xl font-agdasima tracking-wide">
          FinEase
        </div>
        <div className="flex mt-16 gap-72">
          <div className={`px-10 py-2 rounded-full  font-agdasima tracking-wide text-4xl ${!send? ("bg-white text-black border-4 border-gray-500") : ("bg-black text-whit")} hover:bg-white hover:text-black`} onClick={()=>{setSend(false)}}>Reciepts</div>
          <div className={` px-10 py-2 rounded-full bg-black font-agdasima tracking-wide text-4xl ${send? ("bg-white text-black border-4 border-gray-500") : ("bg-black text-white border-2 border-white")} hover:bg-white hover:text-black`} onClick={()=>{setSend(true)}}>Online Payments</div>
        </div>
        <form action="POST">
          
        </form>

      </main>
    </>
  );
}
