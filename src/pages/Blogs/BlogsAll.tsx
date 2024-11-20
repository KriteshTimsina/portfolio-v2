import PostCard from "./Components/PostCard";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import BASE_URL from "../../constants/BASE_URL";

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
      const response = await fetch(`${BASE_URL}/post`);
      const data = await response.json();
      if (data && data?.posts) {
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
    <div className="w-full px-5 md:px-0 md:w-[797px] lg:w-[920px] mx-auto mt-[50px] flex flex-col items-start">
      <section className="flex flex-wrap gap-7 justify-start">
        {blogs &&
          blogs.map((blog: Blog) => {
            return <PostCard key={blog._id} blog={blog} />;
          })}
      </section>
    </div>
  );
};

export default BlogsAll;
