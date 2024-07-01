import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function SearchContainer() {
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

  const [search, setSearch] = useState<string>("");
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [focusedSearch, setFocusedSearch] = useState<string>(search);

  useEffect(() => {
    if (search === "") {
      setActiveSearch(false);
      setFocusedSearch(search);
    } else {
      setActiveSearch(true);
      setFocusedSearch(search);
    }
  }, [search]);

  const searchFilter = INITIAL_POSTS.filter((post) =>
    post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <div className="w-full px-[50px]">
        <div className="w-full rounded-3xl bg-[#e4f2ff] flex flex-row px-16 py-10 justify-between shadow-lg">
          <section className="w-[40%] flex flex-col items-left justify-center">
            <p className="text-[#337dc1] font-Montserrat-Medium">
              Articles, videos and more
            </p>
            <h1 className="text-[42px] leading-[150%] font-Montserrat-Bold text-[#273a57] my-4">
              Find the most relevant content in the IT world
            </h1>
            <SearchBar search={search} setSearch={setSearch} />
            <p className="text-[14px] font-Montserrat-Light text-textGrey">
              We care about your data in our{" "}
              <span className="underline decoration-textGrey decoration-solid">
                privacy policy
              </span>
            </p>
          </section>
          <section className="w-[50%]">
            <video className="w-full" autoPlay loop playsInline muted>
              <source src="../assets/2_hero.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </section>
        </div>
      </div>
      {activeSearch && (
        <div className="w-full bg-white/75 h-full backdrop-blur-md absolute top-[60px] shadow-main flex flex-col items-center py-[60px]">
          <SearchBar search={focusedSearch} setSearch={setFocusedSearch} />
          <section className="w-full grid grid-cols-2 gap-12 px-[120px] py-[60px]">
            {searchFilter.map((post) => (
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
                search={true}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
}

export default SearchContainer;
