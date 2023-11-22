import { NextResponse } from "next/server";
import { connectDB } from "@/utils/dbConexion";
import Task from "@/models/task";

export async function GET(request, { params }) {
    try {
        connectDB();
        const tasksFound = await Task.findById(params.id)
        if (!tasksFound) {
            return NextResponse.json({
                message: "Task not found",
            },{
                status: 404
            });
        }
        return NextResponse.json(tasksFound);
        
    } catch (error) {
        return NextResponse.json(error.message,{status:400});
    }
}

export async function DELETE(request, { params }) {
    try {
        const tasksDelete = await Task.findByIdAndDelete(params.id);
        if (!tasksDelete) {
            return NextResponse.json({
                message: "Task not found",
            },{
                status: 404
            });
        }
        return NextResponse.json(tasksDelete);
    } catch (error) {
        return NextResponse.json(error.message,{status:400});
    }

}

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        const tasksUpdate = await Task.findByIdAndUpdate(params.id, data, {new: true});
        return NextResponse.json(tasksUpdate);
    } catch (error) {
        return NextResponse.json(error.message,{status:400});
    }
}
