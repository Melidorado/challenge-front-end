import ArticleCard from "./ArticleCard";
import SectionContainer from "./SectionContainer";
import { Post } from "../types";
import data from "../data/data.json";
import { useMemo } from "react";

function RecentPosts() {
  const INITIAL_POSTS: Post[] = useMemo(()=>data.filter((article) => article.article === "post"),[])
  
  return (
    <SectionContainer
      sectionTitle="Recent Blog Posts"
      bgColor="bg-transparent"
      data={INITIAL_POSTS}
      gridContainer="h-full grid grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-4"
    >
      {(data, handleTags) =>
        data.map((article, index) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            author={article.author}
            description={article.description}
            tags={article.tags}
            image={article.image}
            width={"col-span-1"}
            height={index == 0 ?"row-span-2" :"row-span-1 "}
            vertical={index == 0 ? true : false}
            handleTags={(event) => handleTags(event)}
            search={false}
          />
        ))
      }
      
    </SectionContainer>
  );
}

export default RecentPosts;
