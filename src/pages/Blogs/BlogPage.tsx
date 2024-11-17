import { BsCalendar3, BsClock } from "react-icons/bs";
import Markdown from "markdown-to-jsx";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "./Blogs";
import dayjs from "dayjs";

const BlogPage = () => {
  const [blog, setBlog] = useState<Blog>();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      getBlogBySlug(slug);
    }
  }, [slug]);

  const getBlogBySlug = useCallback(
    async (slug: string) => {
      try {
        const response = await fetch(
          `https://api.kriteshtimsina.com.np/api/v1/post/${slug}`
        );
        const data = await response.json();
        console.log(data, "xaa");
        if (data && data?.post) {
          console.log("XA ", data.post);
          setBlog(data?.post);
        }
      } catch (error) {}
    },
    [slug]
  );
  return (
    <div className="w-full px-5 md:px-0 md:w-[797px] mx-auto mt-[50px] flex flex-col items-start gap-8">
      <div className="flex items-center gap-5 text-typography">
        <div className="flex items-center gap-3">
          <BsCalendar3 />
          <p>{dayjs(blog?.createdAt).format("MMMM DD, YYYY")}</p>
        </div>
        <div className="flex items-center gap-3">
          <BsClock />
          <p>{blog?.timeToRead} min read</p>
        </div>
      </div>

      <h2 className="font-bold text-2xl">{blog?.title}</h2>
      <p>{blog?.description}</p>
      <div
        style={{
          fontFamily: "monospace", // Monospace font for a Markdown-like feel
          whiteSpace: "pre-wrap", // Preserve line breaks and spacing
          margin: "1em", // Add some spacing
        }}
      >
        <Markdown>{blog?.content}</Markdown>
      </div>
    </div>
  );
};

export default BlogPage;
