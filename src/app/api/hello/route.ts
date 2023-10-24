import { NextResponse } from "next/server";

export async function GET() {
  console.log("hello")
  await new Promise((r) => setTimeout(r, 1000));
  return NextResponse.json({ message: "Hello..." });
}
