import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";


export default function Posts() {

    let navigate = useNavigate();

    return <div>
        <Link to="/post/1">Пост</Link>


    </div>
}

