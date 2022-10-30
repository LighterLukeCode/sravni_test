import "./../scss/app.scss";
import Banner from "../components/banner";
import Post from "../components/post/Post";
import Tags from "../components/tags/Tags";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="main_content">
          <Post />
          <Tags />
        </div>
      </div>
    </>
  );
};

export default Home;
