import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../features/messageSlice";
import axios from "axios";
const Greetings = () => {
  const dispatch = useDispatch();

  const fetchGreetings = async () => {
    await axios
      .get("http://localhost:3000/greetings")
      .then(res => {
        dispatch(setMessages(res.data));
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchGreetings();
  }, []);
  const messages = useSelector(state => state.messages.messages);
  return (
    <div>
      <h1>Greetings</h1>
      <p>
        {messages.message} posted on {messages.created_at}
      </p>
    </div>
  );
};

export default Greetings;
