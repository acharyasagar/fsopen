import React, { useRef, useState } from 'react'

import Toggleable from './Toggleable'

const Blog = props => {
  const [blogExpanded, setBlogExpanded] = useState(false)
  const { blog, updateBlog } = props
  const blogRef = useRef()

  const handleToggle = () => {
    setBlogExpanded(!blogExpanded)
    blogRef.current.toggleVisibility()
  }

  const handleLikeBlog = blogId => {
    return async e => {
      e.target.blur()
      const updatedBlog = { ...blog, likes: blog.likes + 1, user: blog.user.id }
      delete updatedBlog.id
      await updateBlog(updatedBlog, blogId)
    }
  }

  return (
    <>
      <div className="panel">
        <div className={` ${blogExpanded ? 'd-none' : 'flex'}`}>
          <h3 className="title">{blog.title}</h3>
          <button onClick={handleToggle}>
            view blog
            <span role="img" aria-label="blog link">
              &nbsp;🔻
            </span>
          </button>
        </div>
        <Toggleable ref={blogRef} buttonLabel="View">
          <section className="flex">
            <div>
              <p className="title">{blog.title}</p>
              <p className="url">
                <span role="img" aria-label="blog link">
                  &#128279;&nbsp;
                </span>
                <a href={blog.url}>{blog.url}</a>
              </p>
              <p className="subtitle">
                <span> {blog.author} </span>
                <button className="meta" onClick={handleLikeBlog(blog.id)}>
                  <span role="img" aria-label="blog link">
                    &nbsp;&nbsp;&#128420;&nbsp;&nbsp;
                  </span>
                  {blog.likes ? blog.likes : 0} likes
                </button>
              </p>
            </div>
            <div>
              <button onClick={handleToggle}>
                hide blog
                <span role="img" aria-label="blog link">
                  &nbsp;&#128314;
                </span>
              </button>
            </div>
          </section>
        </Toggleable>
      </div>
    </>
  )
}

export default Blog