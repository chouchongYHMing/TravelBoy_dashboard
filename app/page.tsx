import MyLogo from '@/app/ui/mylogo';
import { cards } from '@/public/cardData';
import Card from '@/app/ui/card';
import Chatinput from '@/app/ui/chat-input';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/img/bgGAOPO_blurred.jpg')] bg-cover">

      <div className="flex h-20 shrink-0 items-end rounded-lg bg-[#2ad7bd] p-4 md:h-27 ">
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
          <Chatinput/>
          AI chat model show here
        </div>
      </div>
    </main>
  );
}


var pageCar = 'flex flex-wrap justify-start items-start bg-white border border-gray-300 rounded shadow-2xl overflow-y-auto max-h-[80vh] max-w-3xl';
var pageAIchat = 'flex flex-col-reverse flex-1 bg-white border border-gray-300 rounded shadow-2xl max-h-[80vh]';