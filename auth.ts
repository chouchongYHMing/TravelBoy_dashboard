import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "app/lib/mongodb"
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        // 为确保一致性，可以把 email 转为小写
        const email = (credentials.email as string).toLowerCase();
        const password = credentials.password as string;
        
        const clientInstance = await client;
        const db = clientInstance.db();
        const user = await db.collection("users").findOne({ email });
        if (!user) return null;
        
        // 使用 bcrypt.compare 对比明文密码与数据库中的哈希密码
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;
        
        // 返回用户对象（注意将 _id 转为字符串）
        return { id: user._id.toString(), name: user.name, email: user.email };
      }
    })
  ],
  session: {
    strategy: "jwt" as const,
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }): Promise<any> {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }): Promise<any> {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).name = token.name;
        (session.user as any).email = token.email;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login" // 自定义登录页面路径
  },
  debug: true
});