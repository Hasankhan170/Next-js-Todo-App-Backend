export let todos = [
    {
        id: 1,
        text: 'Learn Next.js',
    },
    {
        id: 2,
        text: 'Build a website',
    }
]

export const  getTodos = (newTood)=>{
    todos = newTood
}