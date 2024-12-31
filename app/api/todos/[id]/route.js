import { NextResponse } from "next/server";
import { todos } from "../todo";

export async function GET(request,{params}){
    const {id} = await params;
    const index = todos.findIndex((item)=>item.id === +id)
    console.log(index);
    if(index === -1){ return NextResponse.json({message : "todo not found",},{status : 404,})}
    return NextResponse.json({
        todo : todos[index]
    })
    
}

export async function DELETE(request,{params}){
    const {id} = await params;
    const index = todos.findIndex((item)=>item.id === +id)
    if(index === -1){ return NextResponse.json({message : "todo not found",},{status : 404,})}
    todos.splice(index,1);
    return NextResponse.json({message : "todo deleted"})

}

export async function PUT(request,{params}){
    const {id} = await params;
    const index = todos.findIndex((item)=>item.id === +id)
    if(index === -1){ return NextResponse.json({message : "todo not found",},{status : 404,})}
    const data = await request.json();
    todos[index] = {...todos[index],...data};
    return NextResponse.json(todos[index])
}