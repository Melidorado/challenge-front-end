import ArticleCard from "./ArticleCard";

const ticketVolume = [
  {
    id: "1",
    image: "/assets/ticket/3_card-1.jpeg",
    author: "Alec Whitten • 17 Jan 2022",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management"],
  },
  {
    id: "2",
    image: "/assets/ticket/4_card-2.jpeg",
    author: "Demi WIlkinson • 16 Jan 2022",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: "3",
    image: "/assets/ticket/5_card-3.jpeg",
    author: "Candice Wu • 15 Jan 2022",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Design", "Research"],
  },
];

function TicketVolume() {
  return (
    <div className="w-full px-[100px] py-[45px] bg-[#f5f9fc]">
      <h2 className="text-black font-Montserrat-SemiBold text-[25px] mb-[25px]">
        Hear Ticket Volume, our podcast of ITSM world
      </h2>
      <section className="grid grid-cols-3 grid-rows-[450px] gap-10">
        {ticketVolume.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            author={article.author}
            description={article.description}
            tags={article.tags}
            image={article.image}
            width={"col-span-1"}
            height={"row-span-1 "}
            vertical={true}
          />
        ))}
      </section>
    </div>
  );
}

export default TicketVolume;
