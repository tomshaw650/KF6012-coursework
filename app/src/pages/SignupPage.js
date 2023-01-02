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
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FaTimes } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function SignupPage(props) {
  // used to navigate user back if they close the modal
  const navigate = useNavigate();

  // auto animate the removal of the error message
  const [animationParent] = useAutoAnimate()

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // state variable for whether the signup is invalid or not
  const [message, setMessage] = useState("");

  // state variable for whether the password is visible or not
  const [passwordShown, setPasswordShown] = useState(false);

  // set name as the value of the name input  
  const handleName = (event) => {
      setName(event.target.value);
  };

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

  // handle the signup, inserting the values into the account table
  const handleSignup = (event) => {
    event.preventDefault();

    // this means that if the user signs out, the password does not remain visible
    setPasswordShown(false);

    // send a POST request to the API with the new account details
    fetch(
      "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/createaccount",
      {
        // method is POST
        method: "POST",
        // set the content type to x-www-form-urlencoded
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        // encode the username and password and send them as the body
        body: `name=${name}&username=${username}&password=${password}`,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // check if the account was successfully created
        if (json.message === "account created!") {
          // show a success message
          setMessage("Account created successfully!");

          // navigate back to the login page after 2 seconds
          setTimeout(() => {
            navigate(-1);
          }, 2000);
        } else {
          // show an error message
          setMessage("Error creating account. Please try again.");
        }
      })
      .catch((e) => {
        console.log(e);
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
          <div ref={animationParent} className="flex w-80 flex-col items-start rounded-xl bg-white p-5">
            {/* close button */}
            <button
              onClick={() => navigate(-1)}
              className="hover:cursor-pointer"
            >
              <FaTimes
                style={{ color: "#000000", width: "20px", height: "40px" }}
              />
              {/* icon may not be the most accessible, setting screenreader text to clarify */}
              <span className="sr-only">Return to login page</span>
            </button>
            <h2 className="flex self-center text-xl font-bold">Sign up</h2>

            {/* name input */}
            <input
              type="text"
              placeholder="Name"
              className="mt-5 w-full rounded border border-gray-300 p-2"
              value={name}
              onChange={handleName}
            />

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

            {message === "Account created successfully!" ? (
              <label className="text-green mt-3 self-center">
                {message}
              </label>
            ) : (
              // otherwise, make the text red
              <label className="text-red mt-3 self-center">{message}</label>
            )}

            {/* signup button */}
            <input
              type="button"
              value="Submit"
              className="mt-10 self-center rounded bg-green-600 py-2 px-4 font-bold text-white hover:bg-green-700"
              onClick={handleSignup}
            />
          </div>
        </div>
      )}
    </div>
  );
}
