import ArticleCard from "./ArticleCard";
import SectionContainer from "./SectionContainer";
import { Post} from "../types";
import data from "../data/data.json";
import { useMemo } from "react";


function TicketVolume() {
  const INITIAL_TICKET_VOLUME: Post[] = useMemo(()=>data.filter((article) => article.article === "ticketVolume"),[])

  return (
    <SectionContainer
      sectionTitle="Hear Ticket Volume, our podcast of ITSM world"
      bgColor="bg-[#f5f9fc]"
      data={INITIAL_TICKET_VOLUME}
      gridContainer="grid grid-cols-3 grid-rows-[450px] gap-10"
    >
      {(data, handleTags) =>
        data.map((article) => (
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
        ))
      }

      {/* {<section className="grid grid-cols-3 grid-rows-[450px] gap-10">
        {data.map((article) => (
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
      </section>} */}
    </SectionContainer>
  );
}

export default TicketVolume;
