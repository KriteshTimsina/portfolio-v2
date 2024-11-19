import { Link } from "react-router-dom";
import { Blog } from "../Blogs";
import { IoArrowForwardOutline } from "react-icons/io5";
import dayjs from "dayjs";

type BlogProps = {
  blog: Blog;
};

const PostCard: React.FC<BlogProps> = ({ blog }) => {
  const formattedDescription =
    blog?.description.length > 40
      ? `${blog?.description.slice(0, 40)}...`
      : blog?.description;
  return (
    <Link to={`/blog/${blog.slug}`} className="flex flex-col gap-3 w-72">
      <h2 className="w-full font-bold">{blog.title}</h2>
      <p className="font-light text-slate-500 dark:text-slate-200 text-md">
        {formattedDescription}
      </p>
      <Link className="flex gap-3 items-center group" to={`/blog/${blog.slug}`}>
        <p className="text-sm text-slate-400">Continue Reading</p>
        <IoArrowForwardOutline
          size={13}
          className="transition-transform group-hover:translate-x-1 text-slate-400"
        />
      </Link>
      <div className="flex gap-3 items-center mt-3">
        <p className="text-sm text-typography">
          {dayjs(blog?.createdAt).format("MMMM DD, YYYY")}
        </p>
        <span className="w-1 h-1 rounded-full bg-typography"></span>
        <p className="text-sm text-typography">{blog.timeToRead} mins</p>
      </div>
    </Link>
  );
};

export default PostCard;
