import ArticleCard from "./ArticleCard";
import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { Post } from "../types";

const INITIAL_TICKET_VOLUME = [
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
  const [ticketVolume, setTicketVolume] = useState<Array<Post>>(
    INITIAL_TICKET_VOLUME
  );
  const [filtered, setFiltered] = useState<boolean>(false);

  const handleTags = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const value = event.currentTarget.value;
    const filteredPosts = INITIAL_TICKET_VOLUME.filter((post) =>
      post.tags.includes(value)
    );
    setTicketVolume(filteredPosts);
    setFiltered(true);
  };

  const resetTags = () => {
    setTicketVolume(INITIAL_TICKET_VOLUME);
    setFiltered(false);
  };

  return (
    <SectionContainer
      filtered={filtered}
      resetTags={resetTags}
      sectionTitle="Hear Ticket Volume, our podcast of ITSM world"
      bgColor="bg-[#f5f9fc]"
    >
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
            handleTags={(event) => handleTags(event)}
            search={false}
          />
        ))}
      </section>
    </SectionContainer>
  );
}

export default TicketVolume;
