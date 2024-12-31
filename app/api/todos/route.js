import { NextResponse } from "next/server";
import { getTodos,todos } from "./todo";

export async function GET(){
    return NextResponse.json({
        message: "Hello, Next.js Serverless Functions!",
        todos
    },{status:200})
}

export async function POST(request){
    const data = await request.json();
    const newTodo = {
        title: data.title,
        id : Date.now()
    }
    getTodos([...todos, newTodo])
    console.log(data);
    return NextResponse.json({
        message: "New Todo Created",
        todos
    },{status:200})
    
}

