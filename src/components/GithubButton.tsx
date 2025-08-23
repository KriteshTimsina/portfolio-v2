import { FaStar } from "react-icons/fa";

import { icons } from "../assets/icons";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, memo } from "react";

interface GitHubStarButtonProps {
  repo: string;
}

interface GitHubAPIResponse {
  stargazers_count: number;
}

const GithubButton = memo(({ repo }: GitHubStarButtonProps) => {
  const [stars, setStars] = useState<number>(0);
  const [animatedStars, setAnimatedStars] = useState<number>(0);
  const requestRef = useRef<number>();

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        const data = (await response.json()) as GitHubAPIResponse;
        setStars(data.stargazers_count ?? 0);
      } catch (error) {
        console.error("Error getting github info:", error);
        setStars(0);
      }
    };
    void fetchStars();
  }, [repo]);

  useEffect(() => {
    const animateStars = (): void => {
      if (animatedStars < stars) {
        const increment = Math.ceil((stars - animatedStars) / 10);
        setAnimatedStars((prev) => Math.min(prev + increment, stars));
        requestRef.current = requestAnimationFrame(animateStars);
      }
    };

    requestRef.current = requestAnimationFrame(animateStars);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [stars, animatedStars]);

  return (
    <div className="fixed transition-all duration-300 ease-in-out delay-1000 bottom-4 right-4 animate-float repeat-1">
      <Link
        to={`https://github.com/${repo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-3 space-x-2 text-sm font-bold text-gray-900 transition-all duration-300 ease-in-out bg-yellow-400 rounded-full shadow-lg hover:scale-110 hover:bg-yellow-500"
      >
        <img
          className="absolute bottom-7"
          src={icons.star}
          alt="Shining star"
          width={100}
          height={30}
        />
        <FaStar color="bg-yellow-200" size={20} />
        <span className="mr-2">Star on GitHub</span>
        <span
          className="px-2 py-1 text-xs font-bold leading-none text-yellow-800 transition-all duration-500 ease-out bg-yellow-200 rounded-full"
          style={{
            transform: `scale(${animatedStars === stars ? 1 : 1.1})`,
            opacity: animatedStars === stars ? 1 : 0.8,
          }}
        >
          {animatedStars}
        </span>
      </Link>
    </div>
  );
});

export default GithubButton;
