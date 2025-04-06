"use client";

import { useEffect, useRef } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatOutputProps {
  messages: ChatMessage[];
}

export default function ChatOutput({ messages }: ChatOutputProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 每次消息更新时，滚动到容器底部
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div ref={containerRef} className="relative w-full h-[70%] bg-white p-2 overflow-y-auto">
      {messages.map((msg, index) => (
        <div key={index} className={`mb-2 ${msg.role === "assistant" ? "text-black-800" : "text-gray-800"}`}>
          <strong>{msg.role === "assistant" ? "AI:" : "You:"}</strong> {msg.content}
        </div>
      ))}
    </div>
  );
}