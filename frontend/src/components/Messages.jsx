import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import * as React from "react";
import { useState, useEffect } from "react";
import api from "../axiosConfig";
import { Message } from "./Message";

export function Messages() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const interval = setInterval(getTweets, 5 * 1000);
    return () => {
      clearInterval(interval);
    };
  }),
    [];
  useEffect(() => {
    getTweets();
  }, []);
  function getTweets() {
    api.get("/tweets").then((resp) => {
      const tweets = resp.data;
      setTweets(tweets);
    });
  }
  return (
    <List sx={{ width: 450 }}>
      {tweets.map((tweet) => {
        return (
          <React.Fragment key={tweet.id}>
            <Message tweet={tweet}></Message>{" "}
            <Divider component="li" variant="middle" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
