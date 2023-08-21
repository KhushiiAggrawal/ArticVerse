import React from "react";
import { useState } from "react";

const Login = () => {
  const [eyeClass, setEyeClass] = useState("fa-solid fa-eye-slash fa-xs");
  const [passType, setPassType] = useState("password");
  const togglePass = () => {
    if (eyeClass === "fa-solid fa-eye fa-xs") {
      setEyeClass("fa-solid fa-eye-slash fa-xs");
      //   console.log(passType);
      setPassType("password");
    } else {
      setEyeClass("fa-solid fa-eye fa-xs");
      //   console.log(passType);
      setPassType("text");
    }
  };
  return (
    <>
      <div className="wrapper">
        {/* <img alt="bgImage" src="/imageset/Dotted-Line-PNG-Picture.png" /> */}
        <div className="content">
          <div className="nav">
            <span className="appname">
              <i
                className="fa-solid fa-circle fa-lg"
                style={{ color: "#009eff" }}
              ></i>
              <p> Artic</p>
            </span>
          </div>
          <form className="LoginMain">
            <h1>Login to Your Account</h1>
            <h6>Your own world of imagination</h6>
            <a id="googleLoginBtn" href="no-referer">
              <i
                style={{ color: "#009eff", marginRight: "0.5rem" }}
                className="fa-brands fa-google icon "
              ></i>
              Login with Google
            </a>
            <h5> OR </h5>

            <div className="inputs">
              <div className="inputDiv email">
                <input
                  autoComplete="email"
                  type="email"
                  placeholder="Email"
                ></input>
                <i
                  className="fa-solid fa-envelope fa-xs"
                  style={{ color: "#f4f5f6" }}
                ></i>
              </div>
              <div className="inputDiv password">
                <input
                  type={passType}
                  autoComplete="current-password"
                  placeholder="Password"
                ></input>
                <i
                  className={eyeClass}
                  style={{ color: "#f4f5f6" }}
                  onClick={() => {
                    togglePass();
                  }}
                ></i>
              </div>
            </div>

            <div id="pwdcase">
              <div className="form-group">
                <input type="checkbox" name="remember" />
                <label htmlFor="css">Remember me</label>
              </div>
              <a href="no-referer" className="borderLessbtn">
                Forgot Password ?
              </a>
            </div>
            <button type="submit" className="loginBtn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
