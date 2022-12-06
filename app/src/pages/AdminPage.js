/**
 *
 * AdminPage renders the login modal
 * Username and Password are encoded and sent as basic auth
 * If the login is successful, the token is stored in local storage and the user is authenticated
 *
 * If the user is authenticated, they are shown the UpdatePage
 *
 * @params handleAuthenticated - function to set authenticated to true
 * @params authenticated - boolean to check if the user is authenticated
 *
 * @author Tom Shaw
 *
 */

import React, { useState, useEffect } from "react";

import UpdatePage from "./UpdatePage";

import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import { FaTimes } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function AdminPage(props) {
  // used to navigate user back if they close the modal
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // state variable for whether the password is visible or not
  const [passwordShown, setPasswordShown] = useState(false);

  // set username as the value of the username input
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  // set password as the value of the password input
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

    // this means that if the user signs out, the password does not remain visible
    setPasswordShown(false);

    // encode the username and password using Buffer library
    const encodedString = Buffer.from(username + ":" + password).toString(
      "base64"
    );

    // send a POST request to the API with the encoded string as the authorisation header
    fetch(
      "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/auth",
      {
        // method is POST, authorisation is a basic token
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
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  // if the user is already authenticated, set authenticated to true
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
