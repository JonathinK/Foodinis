import React from "react";
import { GridWrapper } from "../styles/wrappers.styled";
import BlogCard  from "./blog_card";

export const BlogsRender = ({ blogs }) => {
  console.log("Articles: ", blogs)
  return(
   <GridWrapper className="blogs_render">
    {blogs.map(blog => {
      return <BlogCard content={blog} key={blog.contentful_id}/>
    })}
   </GridWrapper>
  )
}