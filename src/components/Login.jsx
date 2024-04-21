import React, { useState } from "react";
import Heading from "../layout/Heading";
import { useNavigate,Link } from "react-router-dom";
import Button from "../layout/Button";
import axios from "axios";
import reqUrl from "../service";

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${reqUrl}/user/login`,
        {
          Email: email,
          Password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage(response.data.message);
      if(response.data.message === "Login Successfully"){
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      setMessage(err.response ? err.response.data.message : "An error occurred");
    }
  };

  return (
    <div className="min-h-[80vh] max-w-xl m-auto mt-10">
      <div className="max-w-fit mx-auto">
        <Heading title1="User" title2="Login" />
      </div>

      <div className="flex flex-col m-auto w-2/3 mt-10">
        <p className="text-red-600 text-sm font-semibold mb-4">{message}</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-xl font-semibold">
              Email:
              <input
                className="text-lg font-medium ml-3 p-1 w-72"
                type="email"
                required
                placeholder="Enter Your Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="text-xl font-semibold">
              Password:
              <input
                className="text-lg font-medium ml-3 p-1 w-60"
                type="password"
                required
                placeholder="Enter your Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-center">
            <button type="submit">
              <Button title="Login" />
            </button>
          </div>
        </form>

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
