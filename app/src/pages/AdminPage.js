import React, { useState, useEffect } from "react";

import UpdatePage from "./UpdatePage";

import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import { FaTimes } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function AdminPage(props) {
  // used to navigate user back if they close the modal
  const navigate = useNavigate();

  // state variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // state variable for whether the password is visible or not
  const [passwordShown, setPasswordShown] = useState(false);

  // handle username input
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  // handle password input
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // handle password visibility
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // handle signout, removing JWT from local storage and setting authenticated to false
  const handleSignOut = () => {
    localStorage.removeItem("token");
    props.handleAuthenticated(false);
  };

  // handle the login, encoding the username and password and sending a POST request to the API with headers
  const handleLogin = (event) => {
    event.preventDefault();

    setPasswordShown(false);

    const encodedString = Buffer.from(username + ":" + password).toString(
      "base64"
    );

    fetch(
      "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/auth",
      {
        method: "POST",
        headers: new Headers({ Authorization: "Basic " + encodedString }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // if the response is successful, set the token in local storage and set authenticated to true, and close the modal
        if (json.message === "signed in!") {
          localStorage.setItem("token", json.data.token);
          props.handleAuthenticated(true);
          console.log(json.data.token);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.handleAuthenticated(true);
    }
  }, [props]);

  return (
    <div className="flex items-start">
      {/* if the user is authenticated */}
      {props.authenticated ? (
        <UpdatePage handleSignOut={handleSignOut} />
      ) : (
        <div className="align-center absolute top-0 flex h-full w-screen items-center justify-center bg-modal">
          <div className="flex w-80 flex-col items-start rounded-xl bg-white p-5">
            {/* close button */}
            <button
              onClick={() => navigate(-1)}
              className="hover:cursor-pointer"
            >
              <FaTimes
                style={{ color: "#000000", width: "20px", height: "40px" }}
              />
              {/* icon may not be the most accessible, setting screenreader text to clarify */}
              <span className="sr-only">Close pop-up</span>
            </button>
            <h2 className="flex self-center text-xl font-bold">Sign in</h2>

            {/* username input */}
            <input
              type="text"
              placeholder="Username"
              className="mt-5 w-full rounded border border-gray-300 p-2"
              value={username}
              onChange={handleUsername}
            />

            {/* password input */}
            <div className="flex">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                className="mt-2 w-60 rounded border border-gray-300 p-2"
                value={password}
                onChange={handlePassword}
              />
              <button
                className="absolute ml-60 mt-2 rounded border border-gray-300 p-3"
                onClick={togglePassword}
              >
                {passwordShown ? <IoMdEye /> : <IoMdEyeOff />}
              </button>
            </div>

            {/* login button */}
            <input
              type="button"
              value="Submit"
              className="mt-10 self-center rounded bg-green-600 py-2 px-4 font-bold text-white hover:bg-green-700"
              onClick={handleLogin}
            />
          </div>
        </div>
      )}
    </div>
  );
}
