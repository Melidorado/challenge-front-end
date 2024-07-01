import ArticleCard from "./ArticleCard";
import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { Post } from "../types";

const INITIAL_POSTS = [
  {
    id: "1",
    image: "/assets/posts/5_post-1.png",
    author: "Olivia Rhye • 20 Jan 2022",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tags: ["Design", "Research", "Presentation"],
  },
  {
    id: "2",
    image: "/assets/posts/6_post-2.png",
    author: "Phoenix Baker • 19 Jan 2022",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    tags: ["Design", "Research"],
  },
  {
    id: "3",
    image: "/assets/posts/7_post-3.png",
    author: "Lana Steiner • 18 Jan 2022",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["Design", "Research"],
  },
];

function RecentPosts() {
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
