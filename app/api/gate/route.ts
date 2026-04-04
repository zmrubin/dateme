import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { word } = await request.json();
  const gateWord = process.env.GATE_WORD ?? "";

  if (!gateWord) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  if (word?.trim().toLowerCase() !== gateWord.toLowerCase()) {
    return NextResponse.json({ error: "Wrong word" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("access", "granted", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });
  return response;
}
