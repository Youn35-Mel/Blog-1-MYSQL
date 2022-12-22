import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { imghack } from "../../img/Chinese_hacker.webp";
import "./Home.scss";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (error) {}
    };
    fetchData();
  }, [cat]);
  // const blogs = [
  //   {
  //     id: 1,
  //     title: "hello",
  //     desc: "description of this blog is wekbkwe ddinwkd wdwkednwekd wkednwed weodjwoedn",
  //     img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt11947288%2F&psig=AOvVaw2meGrFYhpKqBzt_p1bdIPo&ust=1671705983690000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMj70JzEivwCFQAAAAAdAAAAABAZ",
  //   },
  //   {
  //     id: 2,
  //     title: "hello",
  //     desc: "description of this blog is wekbkwe ddinwkd wdwkednwekd wkednwed weodjwoedn",
  //     img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNature&psig=AOvVaw3-cDk_SyAD2lr5zhnONJpF&ust=1671706609726000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMCxnMfGivwCFQAAAAAdAAAAABAE",
  //   },
  // ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((blog) => {
          return (
            <div className="posts" key={blog.id}>
              <div className="img">
                <img src={blog.img} alt="no" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${posts.id}`}>
                  <h1>{blog.title}</h1>
                  <p>{blog.desc}</p>
                  <button>read more</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
