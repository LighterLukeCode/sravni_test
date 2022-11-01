import "./../scss/app.scss";
import React from "react";
import Banner from "../components/banner";
import Post from "../components/post/Post";
import Tags from "../components/tags/Tags";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPosts } from "../redux/slice/postsSlice";
import { fetchTags } from "../redux/slice/tagSlice";
import Sort from "../components/sort/Sort";

const Home = () => {
  const dispatch = useAppDispatch();
  const { articles } = useAppSelector(state => state.postsSlice.items);

  React.useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Banner />
      <Sort />
      <div className="container">
        <div className="main_content">
          <div className="test">
            {articles.map((post, i) => (
              <Post key={i} post={post} />
            ))}
          </div>
          <Tags />
        </div>
      </div>
    </>
  );
};

export default Home;
