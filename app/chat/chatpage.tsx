"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import ChatInput from "@/app/ui/chat-input";
import ChatOutput from "@/app/ui/chat-output";
import { sendChatMessage } from "@/app/chat/api";

export default function Chat() {
  const { data: session } = useSession();
  // 管理对话消息列表，初始为空
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);

  const handleSendMessage = async (newMessage: string) => {
    // 检查 session 和 session.user 是否存在
    if (!session || !session.user) {
      alert("请先登录");
      return;
    }
    
    // 构造包含最新消息的更新后的历史记录
    const updatedHistory = [...messages.map(m => m.content), newMessage];

    // 先更新状态，将用户消息加入对话
    setMessages(prev => [...prev, { role: "user", content: newMessage }]);

    try {
      // 调用 API 发送消息，传入用户邮箱和更新后的历史记录
      const reply = await sendChatMessage(session.user.email!, updatedHistory, newMessage);
      // 将 AI 回复加入到对话中
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("发送消息出错：", error);
    }
  };

  return (
    <div className="flex flex-col-reverse flex-1 bg-white border border-gray-300 rounded shadow-2xl max-h-[80vh]">
      <ChatInput onSend={handleSendMessage} />
      <ChatOutput messages={messages} />
    </div>
  );
}