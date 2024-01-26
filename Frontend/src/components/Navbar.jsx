import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=PWN">
            <h6>PWN</h6>
          </Link>
          <Link className="link" to="/?cat=Reverse">
            <h6>Reverse</h6>
          </Link>
          <Link className="link" to="/?cat=Crypto">
            <h6>Crypto</h6>
          </Link>
          <Link className="link" to="/?cat=Secruity">
            <h6>Secruity</h6>
          </Link>
          <Link className="link" to="/?cat=Technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=CTF">
            <h6>CTF</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
