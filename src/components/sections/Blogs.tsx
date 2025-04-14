import { Link } from "react-router-dom";

// Sample blog data for the homepage section
const featuredPosts = [
  {
    id: 1,
    title: "Building a Responsive Portfolio with Next.js",
    date: "April 10, 2024",
    slug: "building-responsive-portfolio",
    readTime: "5 min read",
    hasChapters: true,
  },
  {
    id: 2,
    title: "Optimizing React Applications for Performance",
    date: "March 25, 2024",
    slug: "optimizing-react-applications",
    readTime: "7 min read",
    hasChapters: true,
  },
  {
    id: 3,
    title: "The Future of Web Development in 2024",
    date: "February 18, 2024",
    slug: "future-web-development-2024",
    readTime: "6 min read",
    hasChapters: false,
  },
];

export const Blogs = () => {
  return (
    <section className="py-12">
      <div className="flex items-center mb-8">
        <span className="text-red-500 mr-2">📝</span>
        <h2 className="text-2xl font-mono">Blog</h2>
      </div>

      <div className="space-y-6">
        {featuredPosts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.id}
            className="block border-l-2 border-transparent hover:border-red-500 pl-4 py-2 transition-all duration-200"
          >
            {/* className="flex flex-col md:flex-row md:items-center md:justify-between" */}
            <div className="flex flex-col ">
              <div className="flex items-center">
                <h3 className="text-lg font-medium hover:text-red-500 transition-colors duration-200">
                  {post.title}
                </h3>
                {post.hasChapters && (
                  <span className="ml-2 text-xs px-1.5 py-0.5 bg-red-100 text-red-500 rounded-full">
                    Series
                  </span>
                )}
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-1 md:mt-0">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-red-500 hover:underline"
        >
          View all posts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};
