import "./../scss/app.scss";
import React from "react";
import Banner from "../components/banner";
import Post from "../components/post/Post";
import Tags from "../components/tags/Tags";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPosts } from "../redux/slice/postSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(state => state.postSlice);

  const getPost = async () => {
    dispatch(fetchPosts());
  };
  React.useEffect(() => {
    getPost();
  }, []);

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
