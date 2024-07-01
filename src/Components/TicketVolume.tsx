import ArticleCard from "./ArticleCard";
import React from "react";
import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { Post } from "../types";
import data from "../data/data.json";

function TicketVolume() {
  const INITIAL_TICKET_VOLUME: Post[] = data.ticketVolume;

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
