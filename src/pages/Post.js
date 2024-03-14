import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Post() {
    const { id } = useParams()
    let navigate = useNavigate();

    return <div>
        <Link to="/posts">Назад</Link>
        Пост {id}
    </div>
}

