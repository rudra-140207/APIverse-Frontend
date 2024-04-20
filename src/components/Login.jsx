import React, { useState } from "react";
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";
import Button from "../layout/Button";

const Login = () => {

  const {message,setMessage} = useState("");
  const handleSubmit = () => {
   
  };
  return (
    <div className="min-h-[80vh] max-w-xl m-auto mt-10">
      <div className="max-w-fit mx-auto">
        <Heading title1="User" title2="Login" />
      </div>

      <div className="flex flex-col m-auto w-2/3 mt-10">
      <p className="text-red-600 text-sm font-semibold mb-4">{message}</p>

        <div className="mb-4">
          <label className="text-xl font-semibold">Email : </label>
          <input
            className="text-lg font-medium ml-3 p-1 w-72"
            type="email"
            placeholder="Enter Your Email..."
            name="Email"
          />
        </div>
        <div className="mb-4">
          <label className="text-xl font-semibold">Password : </label>
          <input
            className="text-lg font-medium ml-3 p-1 w-60"
            type="password"
            placeholder="Enter your Password..."
            name="Password"
          />
        </div>
        <div className="max-w-fit m-auto">
          <Link onClick={handleSubmit}>
            <Button title="Login" />
          </Link>
        </div>
        <div className="mt-4 text-sm font-semibold">
          <p>
            Don't have an account,{" "}
            <Link to="/signup" style={{ color: "green" }}>
              Signup
            </Link>{" "}
            now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
