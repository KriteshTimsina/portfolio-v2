import { Link } from "react-router-dom"
import { Blog } from "../Blogs"

type BlogProps = {
  blog:Blog
}
 
const PostCard:React.FC<BlogProps> = ({blog}) => {
  return (
    <Link key={blog.id} to={`/blog/${blog.slug}`}  className='flex flex-col gap-5 w-72'>
        <img src={blog.image} className='w-72'  />
        <h2 className='w-full'>{blog.title}</h2>
    </Link>
  )
}

export default PostCard