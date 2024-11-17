import { IoBookOutline } from "react-icons/io5";
import PostCard from "./Components/PostCard";
import CallToAction from "../../components/CallToAction";
import { useEffect, useState } from "react";

export interface Blog {
  category: any[];
  _id: string;
  title: string;
  slug: string;
  description: string;
  authorId: AuthorId;
  timeToRead: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  thumbnail: string;
  content: string;
}

export interface AuthorId {
  _id: string;
  username: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    try {
      const response = await fetch(
        "https://api.kriteshtimsina.com.np/api/v1/post"
      );
      const data = await response.json();
      if (data && data?.posts) {
        console.log("XA ", data.posts);
        setBlogs(data?.posts);
      }
    } catch (error) {}
  };
  return (
    <div className="flex flex-col gap-6 mt-10 ">
      <section className="flex items-center gap-2 text-3xl ">
        <IoBookOutline className="text-yellow-400" />
        <h1>Recent Posts</h1>
      </section>
      <section className="flex flex-wrap justify-center gap-10 px-5 md:justify-start ">
        {blogs &&
          blogs.map((blog: Blog) => {
            return <PostCard key={blog._id} blog={blog} />;
          })}
        {/* <CallToAction href="" title="Explore more..." /> */}
      </section>
    </div>
  );
};

export default Blogs;
