import ArticleCard from "./ArticleCard";
import React from "react";
import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { Post } from "../types";
import data from "../data/data.json";

function RecentPosts() {
  const INITIAL_POSTS: Post[] = data.posts;
  const [posts, setPosts] = useState<Array<Post>>(INITIAL_POSTS);
  const [filtered, setFiltered] = useState<boolean>(false);

  const handleTags = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const value = event.currentTarget.value;
    const filteredPosts = INITIAL_POSTS.filter((post) =>
      post.tags.includes(value)
    );
    setPosts(filteredPosts);
    setFiltered(true);
  };

  const resetTags = () => {
    setPosts(INITIAL_POSTS);
    setFiltered(false);
  };

  return (
    <SectionContainer
      filtered={filtered}
      resetTags={resetTags}
      sectionTitle="Recent Blog Posts"
      bgColor="bg-transparent"
    >
      <div className="h-full grid grid-cols-2 gap-8">
        <ArticleCard
          width="col-span-1"
          height="row-span-2"
          title={posts[0].title}
          description={posts[0].description}
          image={posts[0].image}
          author={posts[0].author}
          tags={posts[0].tags}
          vertical={true}
          key={posts[0].id}
          handleTags={(event) => handleTags(event)}
          search={false}
        />
        {posts.length > 1 &&
          posts
            .slice(1)
            .map((post) => (
              <ArticleCard
                width="col-span-1"
                height="row-span-1"
                title={post.title}
                description={post.description}
                image={post.image}
                author={post.author}
                tags={post.tags}
                vertical={false}
                key={post.id}
                handleTags={(event) => handleTags(event)}
                search={false}
              />
            ))}
      </div>
    </SectionContainer>
  );
}

export default RecentPosts;
