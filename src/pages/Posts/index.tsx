import React, { useEffect, useState} from "react";
import {getAllPostsFetch} from "api/PostsApi";
import {Posts} from "types";
import PostsList from "./components/PostsList";
import Pagination from "./components/Pagination";


const PostsPage:React.FC =()=> {
    const [loading,setLoading] = useState(true)
    const [ allPosts,setAllPosts] = useState<Posts>()
    const [filteredPosts,setFilteredPosts] = useState<Posts>()
    const limit:number = 10;
    const [page,setPage] = useState<number>(1)
    useEffect(()=>{
        getAllPostsFetch().then((value:Posts)=> {
            setAllPosts(value)
            setLoading(false)
        })
    },[])
    useEffect(()=>{
        if(allPosts) {
            setFilteredPosts(allPosts.slice((page - 1) * limit, ((page - 1) * limit) + limit))
        }
    },[allPosts,page])
    return <div>
        {loading ? <div>Загрузка...</div>
            : <> {filteredPosts && <PostsList posts={filteredPosts} />}
            {allPosts && allPosts.length > 10 && <Pagination limit={limit} page={page} length={allPosts.length} setPage={setPage} />}
        </>}
    </div>
}
export default PostsPage
