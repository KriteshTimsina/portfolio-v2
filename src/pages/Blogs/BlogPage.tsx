import { BsCalendar3, BsClock } from "react-icons/bs";
import Markdown from "markdown-to-jsx";

const BlogPage = () => {
  return (
    <div className="w-full px-5 md:px-0 md:w-[797px] mx-auto mt-[50px] flex flex-col items-start gap-8">
      <div className="flex items-center gap-5 text-typography">
        <div className="flex items-center gap-3">
          <BsCalendar3 />
          <p>15 November, 2024</p>
        </div>
        <div className="flex items-center gap-3">
          <BsClock />
          <p>3 min read</p>
        </div>
      </div>

      <h2 className="font-bold text-2xl">
        Taking control of a Laravel Reverb server
      </h2>
      <div
        style={{
          fontFamily: "monospace", // Monospace font for a Markdown-like feel
          whiteSpace: "pre-wrap", // Preserve line breaks and spacing
          margin: "1em", // Add some spacing
        }}
      ></div>
    </div>
  );
};

export default BlogPage;
