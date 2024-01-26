import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const handleReadMore = (postId) => {
    // Navigate to the page of details of the post
    navigate(`/post/${postId}`);
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../img/${post?.img}`} alt="err" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post?.id}`}>
                <h1>{post?.title}</h1>
              </Link>
              <p>{post?.desc}</p>
              <button onClick={() => handleReadMore(post?.id)}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
