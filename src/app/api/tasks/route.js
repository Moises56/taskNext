import { NextResponse } from "next/server";
import { connectDB } from "@/utils/dbConexion";
import Task from "@/models/task";

export function GET() {
    connectDB();
    



  return NextResponse.json({ message: "Obteniedo Tareas" });
}

export function POST() {
  return NextResponse.json({ message: "Creando Tarea" });
}

