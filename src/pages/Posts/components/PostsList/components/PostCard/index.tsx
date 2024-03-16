import s from './post_card.module.css'
import {Post} from "types";
import {Link} from "react-router-dom";
import React from "react";

const PostCard = (props:{post:Post}) => {
    return (
        <div className={s.container}>
            <Link key={props.post.id} to={"/post/" + props.post.id}><h3>{props.post.title} </h3></Link>
        </div>
    );
}
export default PostCard;
