import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import data from "../data/data.json";
import { Post } from "../types";

function SearchContainer() {
  const INITIAL_POSTS: Post[] = data.filter((article) => article.article === "post");
  const [search, setSearch] = useState<string>("");
  const [activeSearch, setActiveSearch] = useState<boolean>(false);

  useEffect(() => {
    if (search === "") {
      setActiveSearch(false);
    } else {
      setActiveSearch(true);
    }
  }, [search]);

  const searchFilter = INITIAL_POSTS.filter((post) =>
    post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <div className="w-full px-[50px] sm:px-9">
        <div className="w-full rounded-3xl bg-[#e4f2ff] flex flex-row px-16 py-10 justify-between shadow-lg sm:py-5 sm:px-5 sm:flex-col-reverse">
          <section className="w-[40%] flex flex-col items-left justify-center sm:w-full">
            <p className="text-[#337dc1] font-Montserrat-Medium sm:text-[12px]">
              Articles, videos and more
            </p>
            <h1 className="text-[42px] leading-[150%] font-Montserrat-Bold text-[#273a57] my-4 sm:text-[24px] sm:leading-[110%]">
              Find the most relevant content in the IT world
            </h1>
            <SearchBar search={search} setSearch={setSearch} />
            <p className="text-[14px] font-Montserrat-Light text-textGrey sm:text-[12px]">
              We care about your data in our{" "}
              <span className="underline decoration-textGrey decoration-solid">
                privacy policy
              </span>
            </p>
          </section>
          <section className="w-[50%] sm:w-full sm:mb-6">
            <video className="w-full" autoPlay loop playsInline muted>
              <source src="../assets/2_hero.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </section>
        </div>
      </div>
      {activeSearch && (
        <div className="w-full bg-white/75 h-full backdrop-blur-md absolute top-[60px] shadow-main flex flex-col items-center py-[60px] sm:px-14">
          <SearchBar search={search} setSearch={setSearch} />
          <section className="w-full grid grid-cols-2 gap-12 px-[120px] py-[60px] sm:grid-cols-1 sm:px-0">
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
