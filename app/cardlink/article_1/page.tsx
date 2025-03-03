"use client";
import Article from './article_1.mdx';

export default function Page() {
    return (
    <div className='bg-stone-100 rounded-lg w-2/3 h-svh border border-gray-300 rounded shadow-2xl'>
         <article className="prose max-w-none w-full">
        <Article />
      </article>
    </div>
    );
  }
  