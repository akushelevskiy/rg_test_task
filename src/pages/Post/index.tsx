import React, {useEffect, useState} from "react";
import s from './post.module.css'
import {Link, useParams} from "react-router-dom";
import {getPostFetch} from "api/PostsApi";
import {Post} from "types";

const PostPage: React.FC = ()=>{
    const { id } = useParams<{ id:string }>()
    const [post,setPost] = useState<Post>()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        if(id)
            getPostFetch(id).then((value:Post)=>{
                setLoading(false)
                setPost(value)
            })
    },[id])

    return <div className={s.container}>
        {loading ? <div>Загрузка...</div>
            : <>
            <Link className={s.back_link} to="/posts">Назад</Link>
            {post && <div>
                <h2 className={s.title}>{post.title}</h2>
                <div className={s.body}>{post.body}</div>
            </div>}
        </>}
    </div>
}
export default PostPage
