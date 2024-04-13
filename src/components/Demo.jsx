import React, { useEffect, useState } from "react";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";
import reqUrl from "../service";
import axios from "axios";

const Demo = () => {
  const [generatedKey, setGeneratedKey] = useState("Temp key");

  const [userCode, setUserCode] = useState(
    `axios.get("http://localhost:4000/api/movie/query?year=2001&cast=aamir",{
      headers : {
        auth_key : "place-auth-key-here"
      }
    })`
  );

  const [output, setOutput] = useState("Output will be displayed here !!");

  const handleGenerateKey = () => {
    axios
      .get(`${reqUrl}/auth/key`)
      .then((res) => {
        setGeneratedKey(res.data.key);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGenerateOutput = () => {
    eval(userCode)
      .then((res) => {
        setOutput(JSON.stringify(res.data, null, 2));
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          setOutput(
    `Request failed with status ${err.response.status} :${err.response.data.message}`
          );
        } else if (err.request) {
          setOutput("Request failed: No response received, Check response URL");
        } else {
          setOutput("Request failed: " + err.message);
        }
      });
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center min-h-screen">
      <Heading title1="Test our API" title2="here" />
      <p className="text-lightText mt-5 text-start">
        Just generate a temporary key from here and use it to test the API.
      </p>
      <p className="text-red-400 mt-1 text-start">
        Only 3 requests per temporary key.
      </p>

      <Link onClick={handleGenerateKey}>
        <Button title="Generate new Key" />
      </Link>

      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4 mt-8 mb-8">
        <p className="text-gray-800">{generatedKey}</p>
      </div>

      <textarea
        className="w-full max-w-md h-48 bg-white rounded-lg shadow-md p-4 mb-8"
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        placeholder="Write your code here..."
      />
      <Link onClick={handleGenerateOutput}>
        <Button title="Generate Output" />
      </Link>

      <div className="w-full max-w-lg h-96 mt-8 mb-16 bg-white rounded-lg shadow-md p-4 overflow-y-auto">
        <pre className="text-gray-800">{output}</pre>
      </div>
    </div>
  );
};

export default Demo;
