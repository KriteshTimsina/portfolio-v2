import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogLoading from "../../components/blog/BlogLoading";

const blogPosts = [
  {
    id: 1,
    title: "Building a Responsive Portfolio with Next.js",
    excerpt:
      "Learn how to create a clean, user-friendly portfolio website using Next.js and Tailwind CSS.",
    date: "April 10, 2024",
    readTime: "5 min read",
    slug: "building-responsive-portfolio",
    tags: ["Next.js", "Tailwind CSS", "Web Development"],
    hasChapters: true,
  },
  {
    id: 2,
    title: "Optimizing React Applications for Performance",
    excerpt:
      "Discover techniques to improve the performance of your React applications with practical examples.",
    date: "March 25, 2024",
    readTime: "7 min read",
    slug: "optimizing-react-applications",
    tags: ["React", "Performance", "JavaScript"],
    hasChapters: true,
  },
  {
    id: 3,
    title: "The Future of Web Development in 2024",
    excerpt:
      "Exploring emerging trends and technologies that will shape the future of web development.",
    date: "February 18, 2024",
    readTime: "6 min read",
    slug: "future-web-development-2024",
    tags: ["Web Development", "Trends", "Technology"],
    hasChapters: false,
  },
  {
    id: 4,
    title: "Creating Custom Hooks in React",
    excerpt:
      "Learn how to extract component logic into reusable functions with custom React hooks.",
    date: "January 30, 2024",
    readTime: "4 min read",
    slug: "creating-custom-hooks-react",
    tags: ["React", "Hooks", "JavaScript"],
    hasChapters: false,
  },
  {
    id: 5,
    title: "Mastering CSS Grid Layout",
    excerpt: "A comprehensive guide to using CSS Grid for modern web layouts.",
    date: "January 15, 2024",
    readTime: "8 min read",
    slug: "mastering-css-grid-layout",
    tags: ["CSS", "Web Design", "Layout"],
    hasChapters: false,
  },
];

export default function Blogs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <BlogLoading />;
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-center mb-8">
        <span className="text-red-500 mr-2">📝</span>
        <h1 className="text-2xl font-mono">Blog</h1>
      </div>

      <p className="text-gray-600 mb-12 border-b pb-6">
        Thoughts, insights, and tutorials on web development, mobile
        applications, and technology.
      </p>

      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border-b border-gray-100 pb-8 last:border-0"
          >
            <Link to={`/blog/${post.slug}`} className="block group">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
                {post.hasChapters && (
                  <>
                    <span className="mx-2">•</span>
                    <span className="text-red-500 font-medium">Series</span>
                  </>
                )}
              </div>
              <h2 className="text-xl font-medium mb-3 group-hover:text-red-500 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
