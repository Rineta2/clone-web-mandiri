import React from "react";

import { articleData } from "@/components/ui/data/Article";

export default function ArticleDetails({ params }) {
  const { slug } = params;

  const article = articleData.find((item) => item.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <section>
      <div className="container">
        <h1>{article.title}</h1>
      </div>
    </section>
  );
}
