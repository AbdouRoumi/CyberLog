import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../img/${post?.img}`} alt="err" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
