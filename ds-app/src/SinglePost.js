import { useParams } from "react-router-dom";
import { posts } from "./data";
import { useState } from "react";
const SinglePost=()=>{
    const{id}=useParams();
    const post=posts.find((post) => post.id===parseInt(id));
    const [likes,setlikes]=useState(0);
    const handlelike=()=>{
        setlikes(likes+1);
    };
return(
    <div className="post-container">
        <h2 className="post-title">This is a Title</h2>
        <p className="post-content">This is a Paragrapg</p>
        <p>likes:{likes}</p>
        <button className="like-button">like</button>
    </div>
);
};
export default SinglePost;