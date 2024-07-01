interface Props {
  filtered: boolean;
  resetTags: () => void;
  children: React.ReactNode;
  sectionTitle: string;
  bgColor: string;
}

function SectionContainer({
  filtered,
  resetTags,
  children,
  sectionTitle,
  bgColor,
}: Props) {
  return (
    <div className={`w-full px-[100px] py-[45px] ${bgColor}`}>
      <div className="w-full flex items-center justify-between mb-[25px]">
        <h2 className="text-black font-Montserrat-SemiBold text-[25px]">
          {sectionTitle}
        </h2>
        {filtered && (
          <button
            className="text-white font-Montserrat-Medium text-[12px] bg-[#0ba1ff] rounded-full w-[110px] h-[25px] "
            onClick={resetTags}
          >
            Reset Filters
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export default SectionContainer;
