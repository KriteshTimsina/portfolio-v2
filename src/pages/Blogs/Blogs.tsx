import { IoArrowForwardOutline, IoBookOutline } from "react-icons/io5";
import PostCard from "./Components/PostCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../../constants/BASE_URL";
import Loader from "../../components/Loader";

export interface Blog {
  category: string[];
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    try {
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
    <div className="flex flex-col gap-6 mt-10">
      <div className="flex justify-between items-center">
        <section className="flex gap-2 items-center text-3xl">
          <IoBookOutline className="text-yellow-400" />
          <h1>Recent Posts</h1>
        </section>
        <Link to={"/blog"} className="flex gap-3 items-center group">
          <h2>All Blogs</h2>
          <IoArrowForwardOutline
            size={20}
            className="text-black transition-transform group-hover:translate-x-1 dark:text-white"
          />
        </Link>
      </div>
      <section className="flex flex-wrap gap-10 justify-center px-5 md:justify-start">
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
