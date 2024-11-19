import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
};

export default function SEO({
  title,
  description,
  url = typeof window !== "undefined" ? window.location.href : "",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Your Site Name" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={"https://kriteshtimsina.com.np/assets/kritesh-057690bd.jpg"}
      />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Kritesh Timsina" />
      <meta name="twitter:site" content="@kritstims" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="kriteshtimsina.com" />
    </Helmet>
  );
}
