import { NextResponse } from "next/server";

export function GET(request, { params }) {
    console.log(params)
    return NextResponse.json({ 
        message: `Obteniedo Tarea: ${params.id}` 
    });
}

export function DELETE(request, { params }) {
    return NextResponse.json({ 
        message: `Eliminando Tarea: ${params.id}` 
    });
}

export function PUT(request, { params }) {
    return NextResponse.json({ 
        message: `Actualizando Tarea: ${params.id}` 
    });
}
