import Link from 'next/link';
import { cards } from 'public/cardData';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }

  export default function Card({ title, description, imageUrl, link }: CardProps) {
    return (
        <Link href={link}  className={cardStyle}>
             <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
             <h2 className="text-xl font-semibold text-gray-800 w-full">{title}</h2>
            <p className="text-gray-600 w-full">{description}</p>
        </Link>
    );
  }

  var cardStyle = 'flex flex-col flex-initial justify-center m-7 rounded-lg bg-white p-4 shadow transition duration-300 ease-in-out hover:shadow-md w-80 aspect-ratio-[4/6]'