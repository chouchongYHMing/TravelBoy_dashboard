export async function sendChatMessage(user: string, history: string[], message: string) {
  const prompt = history.concat([message]).join("\n");
  const payload = {
    model: "deepseek-r1:8b",
    prompt,
    max_tokens: 512,
    temperature: 0.7,
  };

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Response status:", response.status, "Error text:", errorText);
    throw new Error("Failed to get response from backend");
  }
  
  const text = await response.text();
  console.log("Raw response text:", text);
  
  // 将响应文本分割为多个 JSON 字符串
  const chunks = text.split(/\s+(?=\{)/);
  
  // 解析每个 JSON 对象，并提取 "response" 字段
  const replies = chunks.map(chunk => {
    try {
      return JSON.parse(chunk);
    } catch (err) {
      console.error("Error parsing chunk:", chunk, err);
      return null;
    }
  }).filter(obj => obj !== null);
  
  // 合并所有回复（例如直接拼接）
  const finalReply = replies.map(obj => obj.response).join("");
  return finalReply;
}