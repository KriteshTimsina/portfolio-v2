import { BsCalendar3, BsClock } from "react-icons/bs";
import Markdown from "markdown-to-jsx";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "./Blogs";
import dayjs from "dayjs";
import BASE_URL from "../../constants/BASE_URL";
import SEO from "../../components/SEO";
import { Loader } from "../../components/shared";

const BlogPage = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getBlogBySlug(slug);
    }

    return () => {
      setBlog(null);
      setLoading(false);
    };
  }, [slug]);

  const getBlogBySlug = useCallback(async (slug: string) => {
    try {
      const response = await fetch(`${BASE_URL}/post/${slug}`);
      const data = await response.json();
      if (data && data?.post) {
        setBlog(data?.post);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading && !blog) return <Loader />;

  return (
    <div className="w-full px-5 md:px-0 md:w-[797px] mx-auto mt-[50px] flex flex-col items-start gap-8">
      {blog && <SEO title={blog?.title} description={blog?.description} />}
      <div className="flex gap-5 items-center text-typography">
        <div className="flex gap-3 items-center">
          <BsCalendar3 />
          <p>{dayjs(blog?.createdAt).format("MMMM DD, YYYY")}</p>
        </div>
        <div className="flex gap-3 items-center">
          <BsClock />
          <p>{blog?.timeToRead} min read</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold">{blog?.title}</h2>
      <p>{blog?.description}</p>
      <div
        className="markdown-content"
        style={{
          margin: "2em",
        }}
      >
        {/* @ts-ignore */}
        <Markdown>{blog?.content}</Markdown>
      </div>
    </div>
  );
};

export default BlogPage;
