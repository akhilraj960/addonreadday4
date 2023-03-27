import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TodoList = () => {
  // const [submited,setSubmited] = useState(true)
  const [input, setInput] = useState({
    password: "",
    confirmpassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmpassword } = { ...input };
    
    if (password !== confirmpassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
    }
  };
  return (
    <>
      
        <form onSubmit={handleSubmit}>
          <br />
          <TextField
            name="password"
            onChange={inputHandler}
            label="password"
          ></TextField>
          <br />
          <br />
          <TextField
            m={5}
            name="confirmpassword"
            onChange={inputHandler}
            label="confirmpassword"
          ></TextField>
          <br />
          <br />
          <Button type="submit">Submit</Button>
        </form>
        <ToastContainer/>
     
    </>
  );
};

export default TodoList;
