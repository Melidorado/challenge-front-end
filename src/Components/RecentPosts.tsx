import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  image: string;
  author: string;
  title: string;
  description: string;
  tags: string[];
}

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

  /* useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setPosts(INITIAL_POSTS);
    }, 1000);
  }, []); */

  /* let filteredPosts = posts.filter((post) => post.tags.filter((tag) => tag == )); */

  const handleTags = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    /* const value = event.target.value; */
    console.log("Tags clicked", event.currentTarget.value);
  };

  return (
    <section className="w-full py-[45px] px-[100px]">
      <h2 className="text-black font-Montserrat-SemiBold text-[25px] mb-[25px]">
        Recent Blog Posts
      </h2>
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
        />
        <ArticleCard
          width="col-span-1"
          height="row-span-1"
          title={posts[1].title}
          description={posts[1].description}
          image={posts[1].image}
          author={posts[1].author}
          tags={posts[1].tags}
          vertical={false}
          key={posts[1].id}
          handleTags={handleTags}
        />
        {
          <ArticleCard
            width="col-span-1"
            height="row-span-1"
            title={posts[2].title}
            description={posts[2].description}
            image={posts[2].image}
            author={posts[2].author}
            tags={posts[2].tags}
            vertical={false}
            key={posts[2].id}
            handleTags={handleTags}
          />
        }
      </div>
    </section>
  );
}

export default RecentPosts;
