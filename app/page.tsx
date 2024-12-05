import MyLogo from '@/app/ui/mylogo';
import { cards } from 'public/cardData';
import Card from 'app/card';
import '../app/ui/fonts.css';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('public/img/bgGAOPO_blurred.jpg')] bg-cover">

      <div className="flex h-20 shrink-0 items-end rounded-lg bg-[#2ad7bd] p-4 md:h-26 ">
        <MyLogo/>
          <b className="text-white text-sm">
          .made by Omin
          </b>
      </div>
 
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className={pageCar}>
        {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className={pageAIchat}>
          <b> It will be used to create AI chat model.</b>

        </div>
      </div>
    </main>
  );
}


var pageCar = 'flex flex-wrap justify-start items-start bg-gray-50 rounded-lg shadow-2xl overflow-y-auto max-h-[80vh] max-w-3xl';
var pageAIchat = 'flex items-center justify-center p-6 md:w-2/5 md:px-28 md:py-12 bg-white border border-gray-300 rounded shadow-2xl';