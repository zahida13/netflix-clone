import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./netflix.css";
import path from "./RoutingConstant";

import userImg from "./assets/user (1).png";

const Landing = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = async () => {
      let user = await fetch("https://fakestoreapi.com/users");
      let userResponse = await user.json();
      return setUsers(userResponse);
    };

    users();
  }, []);

  return (
    <>
      <div
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "30px",
          }}
        >
          Who's Watching?
        </h1>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {users.map((user) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link to={path.main_page}>
                  <img
                    src={userImg}
                    alt="user"
                    style={{ width: "12rem", cursor: "pointer" }}
                  />
                </Link>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginTop: "8px",
                  }}
                >
                  {user.username}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Landing;
