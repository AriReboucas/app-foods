import Header from "./_components/header";
import Search from "./_components/search";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
    </div>
  );
};

export default Home;
