import { IoBookOutline } from "react-icons/io5";
import PostCard from "./Components/PostCard";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

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

const BlogsAll = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.kriteshtimsina.com.np/api/v1/post"
      );
      const data = await response.json();
      if (data && data?.posts) {
        console.log("XA ", data.posts);
        setBlogs(data?.posts);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="px-5 md:px-0 max-w-5xl mx-auto mt-[50px] flex flex-col items-start gap-8">
      <section className="flex gap-2 items-center text-3xl">
        <IoBookOutline className="text-yellow-400" />
        <h1>Recent Posts</h1>
      </section>
      <section className="flex flex-wrap gap-10 justify-start px-5">
        {blogs &&
          blogs.map((blog: Blog) => {
            return <PostCard key={blog._id} blog={blog} />;
          })}
        {/* <CallToAction href="" title="Explore more..." /> */}
      </section>
    </div>
  );
};

export default BlogsAll;
