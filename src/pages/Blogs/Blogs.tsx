
import { IoBookOutline } from "react-icons/io5";
import PostCard from "./Components/PostCard";

const blogs = [
    {
        id:1,
        title:"This is a blog post title",
        image:"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*eqqGLkn3XbYpHNGS-F5SxQ.png"
    },
    {
        id:2,
        title:"This is a blog post title",
        image:"https://miro.medium.com/v2/resize:fit:828/format:webp/0*d0BdjfkM3LxaNgSK.jpg"
    },
]

const Blogs = () => {
  return (
    <div className="flex flex-col gap-6 mt-10 ">
      <section className="flex items-center gap-2 text-3xl ">
        <IoBookOutline className="text-yellow-400" />
        <h1>Popular Posts</h1>
      </section>
      <section className="flex flex-wrap justify-center gap-10 px-5 md:justify-start ">
        {blogs && blogs.map(blog=>{
            return <PostCard key={blog.id} blog={blog} />
        })}
      </section>
    </div>
  );
};

export default Blogs;
