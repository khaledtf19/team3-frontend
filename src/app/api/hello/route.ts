import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(req:Request) {
  console.log("hello")
  await new Promise((r) => setTimeout(r, 1000));
  return NextResponse.json({ message: "Hello..." });
}
