import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  const { password } = await req.json();

  // 🔐 Hardcoded admin password (we will upgrade later to DB)
  const ADMIN_PASSWORD = "admin123";

  if (password !== ADMIN_PASSWORD) {
    return Response.json({ error: "Invalid password" }, { status: 401 });
  }

  // 🔐 Create token
  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  // 🍪 Set HTTP-only cookie
  cookies().set("admin_token", token, {
    httpOnly: true,
    secure: false,
    path: "/",
  });

  return Response.json({ success: true });
}