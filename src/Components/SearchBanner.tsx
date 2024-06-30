function SearchContainer() {
  return (
    <div className="w-full px-[50px]">
      <div className="w-full rounded-3xl bg-[#e4f2ff] flex flex-row px-16 py-10 justify-between shadow-lg">
        <section className="w-[40%] flex flex-col items-left justify-center">
          <p className="text-[#337dc1] font-Montserrat-Medium">
            Articles, videos and more
          </p>
          <h1 className="text-[42px] leading-[150%] font-Montserrat-Bold text-[#273a57] my-4">
            Find the most relevant content in the IT world
          </h1>
          <input
            className="my-4"
            type="text"
            placeholder="Search for a movie..."
          />
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
  );
}

export default SearchContainer;
