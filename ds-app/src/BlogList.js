
import { Link } from "react-router-dom"
import React from "react"
import { posts } from "./data"
const BlogList =()=> {
    return(
        <div className="blog-list">
            <h2>
                blog post
            </h2>
            <ul>
                {posts.map((oneObj)=>
                
                    {return<li className="blog-item">
            <Link to={`/posts/${oneObj.id}`}>{oneObj.title}</Link>
            </li>

                })}
            </ul>
        </div>
    );
};
export default BlogList;