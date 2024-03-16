import s from './posts.module.css'
import {Posts,Post} from "types";
import React from "react";
import PostCard from "./components/PostCard";

const PostsList = (props:{posts:Posts}) => {


    return (
        <div className={s.container}>
            {props.posts.map((post:Post)=><PostCard key={post.id} post={post}/>)}
        </div>
    );
}
export default PostsList;
