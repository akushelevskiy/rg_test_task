import s from './pagination.module.css'
import React from "react";
type paginationProps = {limit:number, length:number, page:number, setPage: (page:number)=>void}
const PostsList = React.memo((props:paginationProps) => {
    const PagesButtons = ()=>{
        let pagesCount = Math.ceil(props.length/props.limit)
        let buttons = []
        for(let i=1;i<=pagesCount;i++){
            buttons.push(<button className={s.button} key={i} onClick={()=>{props.setPage(i)}}>{i}</button>)
        }
        return <div className={s.container}>{buttons}</div>
    }

    return (
        <div>
        <PagesButtons />
        </div>
    );
},(prevProps:Readonly<paginationProps>,nextProps:Readonly<paginationProps>)=>{
    if(prevProps.length !== nextProps.length) return false
    else return true
})
export default PostsList;
