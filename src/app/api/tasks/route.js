import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/dbConexion'
import Task from '@/models/task';

export async function GET() {
    connectDB();

   const tasks = await Task.find({});
    return NextResponse.json(tasks);
}

export async function POST(request) {
  try {
    const data = await request.json();
  const newTask = new Task(data);
  const saveTasks = await newTask.save();
  // console.log(saveTasks)
  return NextResponse.json(saveTasks);
    
  } catch (error) {
    return NextResponse.json(error.message,{status:400});
  }
}

