import React from 'react'

 
const PostCard = ({blog}:any) => {
  return (
    <div className='flex flex-col gap-5'>
        <img src={blog.image} width={300}  />
        <h2>{blog.title}</h2>
    </div>
  )
}

export default PostCard