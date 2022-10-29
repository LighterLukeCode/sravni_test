import React from "react";
import Banner from "./components/banner";
import Header from "./components/header";
import Post from "./components/post/Post";
import Sort from "./components/sort/Sort";
import Tags from "./components/tags/Tags";
import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Sort />
      <div className="container">
        <div className="main_content">
          <Post />
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default App;
