"use client";

import { useState } from 'react';

export default function Chatinput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('发送消息：', message);
      // 此处可以添加调用发送 API 或其他逻辑
      setMessage('');
    }
  };

  return (
    <div className={inputStyle}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="此处输入文本..."
        className={textStyle}
      />
      {/* 发送按钮：位于右下角 */}
      <button
        onClick={handleSend}
        className={buttonStyle}
      >
        发送
      </button>
    </div>
  );
}
var inputStyle = 'relative w-full h-[30%] bg-slate-50 border border-gray-300 rounded shadow p-2'
var textStyle = 'w-full pr-20 p-2 rounded border border-transparent h-[75%] bg-slate-50 resize-none focus:outline-none focus:ring-0 focus:border-transparent appearance-none'
var buttonStyle = 'absolute bottom-2 shadow-lg shadow-[#2ad7bd]/50 right-2 px-4 py-2 bg-[#2ad7bd] text-white rounded transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 font-medium'