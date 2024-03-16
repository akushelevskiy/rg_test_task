import React, {useEffect, useState} from "react";
import s from './post.module.css'
import {Link, useParams} from "react-router-dom";
import {getPostFetch} from "api/PostsApi";
import {Post} from "types";

const PostPage: React.FC = ()=>{
    const { id } = useParams<{ id:string }>()
    const [post,setPost] = useState<Post>()
    useEffect(()=>{
        if(id)
            getPostFetch(id).then((value:Post)=>setPost(value))
    },[id])
    return <div className={s.container}>
        <Link className={s.back_link} to="/posts">Назад</Link>
        {post && <>
            <h2 className={s.title}>{post.title}</h2>
            <div className={s.body}>{post.body}</div>
        </>}
    </div>
}
export default PostPage
