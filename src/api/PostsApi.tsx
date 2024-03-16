import {Posts} from "../types";


export async function getAllPostsFetch (){
    const response: Response = await fetch( 'https://jsonplaceholder.typicode.com/posts/')
    if (response.ok) {
        const responseJSON:Posts = await response.json() as Posts
        return responseJSON
    }else{
        return []
    }
}
export async function getPostFetch (id:string){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    if (response.ok) {
        const responseJSON = await response.json()
        return responseJSON
    }else{
        return null
    }
}
