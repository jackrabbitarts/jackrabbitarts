import React from 'react'

const BlogList = () => {
  return (
    <div id="blog-list">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
               <h2>{ blog.title }</h2> 
            </div>
))}
    </div>
  )
}

export default BlogList