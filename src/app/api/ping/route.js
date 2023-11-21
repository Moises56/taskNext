import { NextResponse } from "next/server";
import { connectDB } from "@/utils/dbConexion";

export function GET() {
  connectDB();
  return NextResponse.json({ 
    message: "Hello World!" 
});
}

