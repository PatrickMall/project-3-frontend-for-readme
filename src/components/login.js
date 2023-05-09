import loginBackground from "../static/images/loginbackground.jpg";
import FormInput from "./common/formInput";
import { useState } from "react";
import authAxios from "../lib/authAxios";
import apiRoute from "../lib/apiRoute";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    const user = {
      username: username,
      password: password,
    };
    try {
      const response = await authAxios.post(`${apiRoute}login`, {user: user})
      console.log(response);
      localStorage.setItem("token", response.data.token);
      setError("");
    }
    catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
      <div className="p-4 shadow-md rounded-lg max-w-[1000px]">
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <FormInput
            label={"username"}
            type={"text"}
            value={username}
            onChange={setUsername}
          />
          <FormInput
            label={"password"}
            type={"password"}
            value={password}
            onChange={setPassword}
          />
          <button
            type="submit"
            className="text-lg bg-red-600 rounded text-white"
          >
            Submit
          </button>
          <div className="w-full h-[0.5px] bg-gray-300 my-2 "></div>

          <span>
            New to daterbase?
            <Link to="/signup" className="text-xs text-blue-700 hover:border-b border-blue-700 cursor-pointer">
              Sign up
            </Link>
          </span>
        </form>
        {error && <div className="bg-red-200 w-full rounded">
          Error: {error}
        </div>}
      </div>
  );
};

export default Login;