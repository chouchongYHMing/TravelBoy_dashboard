"use client";

import Image from 'next/image';
import Link from "next/link";
import { useSession } from "next-auth/react";
import '@/app/ui/fonts.css';

export default function MyLogo() {
  const { data: session, status } = useSession();

  // 根据登录状态决定显示的文本：如果 session 存在，则显示用户名，否则显示 "No user"
  const displayName = session?.user?.name || "No user";


  return (
    <div className='w-full flex items-center justify-between leading-none text-white'>
      <div className="flex items-center space-x-2">
        <Image
         src="/img/carboy.jpg"
         alt="Travel Boy"
         width={48}
         height={48}
          className="w-12 h-12" // 确保图片具有适当的尺寸类
      />
      <a style={{ fontSize: '3vw' }} className="text-white smiley">
        TravelBoy
      </a>
      <b className="text-white text-sm">
          .made by JiaoZZ
      </b>
      </div>

    
      <Link href="/login" className= "transition ease-out hover:-translate-y-1 hover:scale-110">
        <span style={{ fontSize: "3vw" }} className="text-white smiley ml-2">
          Login:{displayName}
        </span>
      </Link>

    </div>
  );
}
