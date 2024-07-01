import { ReactNode, useState } from "react";
import { Post } from "../types";

interface Props {
  children: (
    data: Post[],
    handleTags: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  ) => ReactNode;
  sectionTitle: string;
  bgColor: string;
  data: Post[];
  gridContainer: string;
}

function SectionContainer({ children, sectionTitle, bgColor, data, gridContainer }: Props) {
  const filteredByTag = data;

  const [ticketVolume, setTicketVolume] = useState<Array<Post>>(filteredByTag);
  const [filtered, setFiltered] = useState<boolean>(false);

  const handleTags = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const value = event.currentTarget.value;
    const filteredPosts = filteredByTag.filter((post) =>
      post.tags.includes(value)
    );
    setTicketVolume(filteredPosts);
    setFiltered(true);
  };

  const resetTags = () => {
    setTicketVolume(filteredByTag);
    setFiltered(false);
  };

  return (
    <div className={`w-full px-[100px] py-[45px] ${bgColor}`}>
      <div className="w-full flex items-center justify-between mb-[25px]">
        <h2 className="text-black font-Montserrat-SemiBold text-[25px]">
          {sectionTitle}
        </h2>
        {filtered && (
          <button
            className="text-white font-Montserrat-Medium text-[12px] bg-[#0ba1ff] rounded-full w-[110px] h-[25px] flex items-center justify-between px-[8px]"
            onClick={resetTags}
          >
            Reset Filters
            <svg className="h-3 w-3 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        )}
      </div>
      <section className={`${gridContainer}`}>
        {children(ticketVolume, handleTags)}
      </section>
    </div>
  );
}

export default SectionContainer;
