export default function BlogLoading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header skeleton */}
      <div className="flex items-center mb-8">
        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse mr-2"></div>
        <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Description skeleton */}
      <div className="h-5 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
      <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse mb-12 pb-6 border-b"></div>

      {/* Blog posts skeleton */}
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="border-b border-gray-100 pb-8 mb-12 last:border-0"
        >
          {/* Meta info skeleton */}
          <div className="flex items-center mb-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            <div className="mx-2 h-4 w-1 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Title skeleton */}
          <div className="h-7 w-3/4 bg-gray-200 rounded animate-pulse mb-3"></div>

          {/* Excerpt skeleton */}
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-4"></div>

          {/* Tags skeleton */}
          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
