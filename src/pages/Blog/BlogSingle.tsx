import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import BlogPostLoading from "../../components/blog/BlogSingleLoading";

// Sample blog data - you would typically fetch this based on the slug
const getBlogPost = (slug: string) => {
  // This is mock data - in a real app, you'd fetch from a database or CMS
  const posts = {
    "building-responsive-portfolio": {
      title: "Building a Responsive Portfolio with Next.js",
      date: "April 10, 2024",
      readTime: "5 min read",
      author: "Kritesh Timsina",
      tags: ["Next.js", "Tailwind CSS", "Web Development"],
      content: `
Creating a responsive portfolio website is essential for showcasing your work effectively across all devices. In this article, I'll walk through how I built my portfolio using Next.js and Tailwind CSS.

## Why Next.js?

Next.js provides an excellent framework for building static and server-rendered applications. Its file-based routing system makes organizing pages intuitive, while features like image optimization and automatic code splitting improve performance significantly.

## Styling with Tailwind CSS

Tailwind CSS offers a utility-first approach that allows for rapid UI development without leaving your HTML. This makes it perfect for creating custom designs without writing custom CSS.

## Key Features Implemented

- Responsive design that works on all screen sizes
- Dark/light mode toggle
- Project showcase with filtering options
- Performance optimizations for fast loading
- SEO best practices

## Code Example

\`\`\`jsx
// Example of a responsive card component with Tailwind
const ProjectCard = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
\`\`\`

The combination of Next.js and Tailwind CSS provides a powerful toolkit for creating modern, responsive websites. By leveraging these technologies, you can build a portfolio that not only looks great but also performs exceptionally well.
      `,
      chapters: [
        {
          number: 1,
          title: "Setting Up Your Next.js Project",
          slug: "setting-up-nextjs-project",
        },
        {
          number: 2,
          title: "Building a Responsive Portfolio with Next.js",
          slug: "building-responsive-portfolio",
          current: true,
        },
        {
          number: 3,
          title: "Adding Animations and Interactions",
          slug: "adding-animations-interactions",
        },
        {
          number: 4,
          title: "Deploying Your Portfolio",
          slug: "deploying-portfolio",
        },
      ],
    },
    "optimizing-react-applications": {
      title: "Optimizing React Applications for Performance",
      date: "March 25, 2024",
      readTime: "7 min read",
      author: "Kritesh Timsina",
      tags: ["React", "Performance", "JavaScript"],
      content: `
Performance optimization is crucial for providing a smooth user experience in React applications. In this article, I'll share some techniques I've used to improve performance in my projects.

## Memoization with React.memo and useMemo

Preventing unnecessary re-renders is one of the most effective ways to improve React performance. React.memo and useMemo help achieve this by memoizing components and values.

\`\`\`jsx
// Using React.memo to prevent unnecessary re-renders
const ExpensiveComponent = React.memo(({ data }) => {
  // Component implementation
  return <div>{/* Render data */}</div>;
});

// Using useMemo to memoize expensive calculations
function MyComponent({ items }) {
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...items].sort();
  }, [items]);
  
  return <div>{sortedItems.map(item => <div key={item}>{item}</div>)}</div>;
}
\`\`\`

## Code Splitting

Large React applications can benefit significantly from code splitting, which allows you to load only the code necessary for the current view.

\`\`\`jsx
// Using dynamic imports for code splitting
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function MyApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Virtual List Rendering

When dealing with long lists, rendering only the items visible in the viewport can dramatically improve performance.

By implementing these techniques, you can create React applications that remain responsive even as they grow in complexity.
      `,
      chapters: [
        {
          number: 1,
          title: "Understanding React Performance",
          slug: "understanding-react-performance",
        },
        {
          number: 2,
          title: "Optimizing React Applications for Performance",
          slug: "optimizing-react-applications",
          current: true,
        },
        {
          number: 3,
          title: "Advanced Performance Techniques",
          slug: "advanced-performance-techniques",
        },
      ],
    },
    "future-web-development-2024": {
      title: "The Future of Web Development in 2024",
      date: "February 18, 2024",
      readTime: "6 min read",
      author: "Kritesh Timsina",
      tags: ["Web Development", "Trends", "Technology"],
      content: `
The web development landscape continues to evolve rapidly. Here are some trends and technologies that I believe will shape web development in 2024 and beyond.

## AI-Assisted Development

AI tools are increasingly helping developers write code, debug issues, and even design interfaces. This trend is likely to accelerate as AI models become more sophisticated.

## WebAssembly Adoption

WebAssembly is enabling high-performance applications on the web that were previously only possible in native environments.

\`\`\`rust
// Example WebAssembly code in Rust
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
\`\`\`

## Edge Computing

Moving computation closer to users through edge functions and CDNs is becoming standard practice for optimizing web application performance.

Staying ahead of these trends will be crucial for developers looking to build cutting-edge web experiences in the coming years.
      `,
      // This post doesn't have chapters
    },
  };

  return posts[slug as keyof typeof posts] || null;
};

export default function BlogSingle() {
  const post = getBlogPost("building-responsive-portfolio");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <BlogPostLoading />;
  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-medium mb-4">Blog post not found</h1>
        <Link
          to="/blog"
          className="text-red-500 hover:underline inline-flex items-center"
        >
          <IoChevronBackOutline className="w-4 h-4 mr-2" />
          Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link
        to="/blog"
        className="text-red-500 hover:underline inline-flex items-center mb-8"
      >
        <IoChevronBackOutline className="w-4 h-4 mr-2" />
        Back to all posts
      </Link>

      <article>
        <h1 className="text-3xl font-medium mb-4">{post.title}</h1>

        <div className="flex items-center text-sm text-gray-500 mb-8 pb-6 border-b">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              h2: ({ node, ...props }) => (
                <h2 className="text-xl font-medium mt-8 mb-4" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-lg font-medium mt-6 mb-3" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-4 leading-relaxed" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-5 mb-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-5 mb-4" {...props} />
              ),
              li: ({ node, ...props }) => <li className="mb-1" {...props} />,
              a: ({ node, ...props }) => (
                <a className="text-red-500 hover:underline" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Chapters Section */}
        {/* {post.chapters && post.chapters.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium mb-4">Chapters in this series</h3>
            <div className="space-y-3">
              {post.chapters.map((chapter) => (
                <Link
                  key={chapter.number}
                  href={`/blog/${chapter.slug}`}
                  className={`flex items-start py-2 pl-3 border-l-2 ${
                    chapter.current
                      ? "border-red-500 text-red-500 bg-red-50 bg-opacity-30"
                      : "border-gray-200 hover:border-red-300 hover:text-red-500"
                  } transition-colors duration-200`}
                >
                  <span className="text-sm font-medium mr-2">{chapter.number.toString().padStart(2, "0")}.</span>
                  <span className={`${chapter.current ? "font-medium" : ""}`}>{chapter.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )} */}
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Share this post</span>
          <div className="flex gap-4">
            <button className="text-gray-500 hover:text-red-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </button>
            <button className="text-gray-500 hover:text-red-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </button>
            <button className="text-gray-500 hover:text-red-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
