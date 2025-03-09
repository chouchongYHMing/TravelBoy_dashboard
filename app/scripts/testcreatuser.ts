import 'dotenv/config';
import clientPromise from "../lib/mongodb";
import bcrypt from "bcrypt";

async function createTestUser() {
  const client = await clientPromise;
  const db = client.db(); // 使用默认数据库，或者指定数据库名称

  // 定义测试用户信息
  const email = "test@example.com";
  const name = "Test User";
  const password = "test123"; // 明文密码

  // 对密码进行哈希处理
  const hashedPassword = await bcrypt.hash(password, 10);

  // 插入用户到 users 集合
  const result = await db.collection("users").insertOne({
    email,
    name,
    password: hashedPassword,
    createdAt: new Date(),
  });

  console.log("测试用户创建成功，ID：", result.insertedId);
  process.exit(0);
}

createTestUser().catch((err) => {
  console.error(err);
  process.exit(1);
});