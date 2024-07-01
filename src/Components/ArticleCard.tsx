import Tag from "./Tag";

interface Props {
  width: string;
  height: string;
  title: string;
  description: string;
  image: string;
  author: string;
  tags: string[];
  vertical: boolean;
  handleTags?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  search: boolean;
}

function ArticleCard({
  width,
  height,
  title,
  description,
  image,
  author,
  tags,
  vertical,
  handleTags,
  search,
}: Props) {
  return (
    <article
      className={`${width} ${height} bg-transparent ${
        vertical ? "flex flex-col" : "flex flex-row"
      }`}
    >
      <div
        className={`${vertical ? "w-full h-[55%] min-h-[55%]" : "w-[50%]"} `}
      >
        <img
          className="w-full rounded-[20px] object-cover h-full"
          src={image}
        />
      </div>
      <section
        className={`flex flex-col justify-between my-[15px] ${
          vertical ? "w-full h-[45%]" : "w-[50%] ml-[15px]"
        }`}
      >
        <p className="text-[#417db0] font-Montserrat-Medium text-[12px]">
          {author}
        </p>
        <div className="flex flex-row items-center justify-between">
          <h2
            className={`text-black font-Montserrat-SemiBold ${
              vertical ? "text-[22px]" : "text-[18px]"
            }`}
          >
            {title}
          </h2>
          {vertical && (
            <svg
              className="h-6 w-6 text-[#417db0]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <line x1="7" y1="17" x2="17" y2="7" />{" "}
              <polyline points="7 7 17 7 17 17" />
            </svg>
          )}
        </div>
        <p className={`text-textGrey font-Montserrat-Medium "text-[15px]"`}>
          {description}
        </p>
        {!search && (
          <div className="flex flex-row gap-3">
            {tags.map((tag) => {
              return (
                <Tag key={tag} tag={tag} handleTags={handleTags} />
              );
            })}
          </div>
        )}
      </section>
    </article>
  );
}

export default ArticleCard;
