import NavBar from "../Components/NavBar";
import SearchContainer from "../Components/SearchBanner";
import RecentPosts from "../Components/RecentPosts";
import TicketVolume from "../Components/TicketVolume";

function Landing() {
  return (
    <div className="w-full bg-white relative">
      <NavBar />
      <SearchContainer />
      <RecentPosts />
      <TicketVolume />
    </div>
  );
}

export default Landing;
