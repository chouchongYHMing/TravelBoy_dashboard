import Image from 'next/image';

export default function MyLogo() {
  return (
    <div className='flex flex-row items-center leading-none text-white'>
      <Image
        src="/img/carboy.jpg"
        alt="Travel Boy"
        width={48}
        height={48}
        className="w-12 h-12" // 确保图片具有适当的尺寸类
      />
      <a style={{ fontSize: '4vw' }} className="text-white smiley">
        TravelBoy
      </a>
    </div>
  );
}
