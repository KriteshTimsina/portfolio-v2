export default function BlogPostLoading() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Back button skeleton */}
      <div className="flex items-center mb-8">
        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <article>
        {/* Title skeleton */}
        <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>

        {/* Meta info skeleton */}
        <div className="flex items-center mb-8 pb-6 border-b">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="mx-2 h-4 w-1 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="mx-2 h-4 w-1 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        {/* Content skeleton */}
        <div className="space-y-4 mb-8">
          <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>

          {/* Heading skeleton */}
          <div className="h-7 w-1/2 bg-gray-200 rounded animate-pulse mt-8 mb-4"></div>

          <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-2/3 bg-gray-200 rounded animate-pulse"></div>

          {/* Code block skeleton */}
          <div className="h-32 w-full bg-gray-300 rounded animate-pulse my-6"></div>

          {/* Heading skeleton */}
          <div className="h-7 w-1/2 bg-gray-200 rounded animate-pulse mt-8 mb-4"></div>

          <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-4/5 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Chapters skeleton */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-10 w-full bg-gray-200 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </article>

      {/* Share section skeleton */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex gap-4">
            <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
