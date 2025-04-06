"use client";
import Article from 'app/cardlink/article_2/article_2.mdx';

export default function Page() {
    return (
    <div className='bg-stone-100 rounded-lg w-2/3 h-fit min-h-lvh border border-gray-300 rounded shadow-2xl p-4'>
         <article className="prose max-w-none w-full">
        <Article />
      </article>
    </div>
    );
  }
  