"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    
    console.log("signIn result:", result);
   

    if (result?.error) {
      alert("登录失败，请检查账号和密码");
    } else {
      alert("登录成功");
      router.push("/");
    }
  };

  return (
    <div className="bg-stone-100 rounded-lg w-3/5 h-96 border border-gray-300 shadow-2xl flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full px-8">
        {/* 账号输入 */}
        <div className="mb-4 pt-8">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            账号
          </label>
          <input
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="请输入账号"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            required
          />
        </div>
        {/* 密码输入 */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            密码
          </label>
          <input
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入密码"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            required
          />
        </div>
        {/* 按钮组 */}
        <div className="flex justify-between pt-12">
          <button
            type="button"
            className="shadow-lg shadow-[#2ad7bd]/50 px-4 py-2 bg-[#2ad7bd] text-white rounded transition duration-300 font-medium hover:-translate-y-1 hover:scale-110"
            onClick={() => alert("暂不开放注册功能，AIchat账号仅内部开放哦^^")}
          >
            注册
          </button>
          <button
            type="submit"
            className="shadow-lg shadow-[#2ad7bd]/50 px-4 py-2 bg-[#2ad7bd] text-white rounded transition duration-300 font-medium hover:-translate-y-1 hover:scale-110"
          >
            登录
          </button>
        </div>
      </form>
    </div>
  );
}