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

  const handleReset = () => {
    setUserCode(
      `axios.get("http://localhost:4000/api/movie/query?year=2001&cast=aamir",{
      headers : {
        auth_key : "place-auth-key-here"
      }
    })`
    );
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
            `Request failed with status ${err.response.status}: ${err.response.data.message}`
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
      <p className="text-lightText m-5 text-start">
        Just generate a temporary key from here and use it to test the API.
      </p>
      <p className="text-red-400 mt-1 text-start">
        Only 3 requests per temporary key.
      </p>

      <Link onClick={handleGenerateKey}>
        <Button title="Generate new Key" />
      </Link>

      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4 mt-8 mb-8 lg: w-2/3">
        <p className="text-gray-800">{generatedKey}</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto px-4 lg: w-11/12">
        <div className="w-full lg:w-1/2 lg:mr-16">
          <p className="text-lightText mt-5 text-start">
            Change the query accordingly, refer to{" "}
            <Link className="text-blue-500" to="/docs">
              Documentation
            </Link>{" "}
            .
          </p>
          <textarea
            className="w-full h-48 bg-white rounded-lg text-lg shadow-md p-4 mt-4 mb-8 lg: text-sm lg: mb-4"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
          />
          <div className="flex">
            <div className="w-1/4">
              <Link onClick={handleReset}>
                <Button title="Reset" />
              </Link>
            </div>

            <div className="w-2/3 ml-8">
              <Link onClick={handleGenerateOutput}>
                <Button title="Generate Output" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg: mb-4">
          <div className="h-96 bg-white rounded-lg shadow-md p-4 overflow-y-auto">
            <pre className="text-gray-800">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
