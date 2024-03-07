
import { IoBookOutline } from "react-icons/io5";
import PostCard from "./Components/PostCard";
import CallToAction from "../../components/CallToAction";

export type Blog = {
  id:number;
  title:string;
  image:string;
  slug:string;
}

const blogs:Blog[] = [
    {
        id:1,
        title:"React 19 is here. Here's what you need to know.",
        image:"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*eqqGLkn3XbYpHNGS-F5SxQ.png",
        slug:"react-19-is-here-here-what-you-need-to-know"
    },
    {
        id:2,
        title:"All the react concepts you need to know to learn React Native",
        image:"https://miro.medium.com/v2/resize:fit:828/format:webp/0*d0BdjfkM3LxaNgSK.jpg",
        slug:"all-the-react-concepts-you-need-to-know-to-learn-react-native"
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
            return <PostCard blog={blog} />
        })}
      <CallToAction href=""  title="Explore more..."/> 
      </section>
    </div>
  );
};

export default Blogs;
