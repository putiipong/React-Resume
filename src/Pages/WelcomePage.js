import { useHistory } from "react-router-dom";
import React from "react";
import hellologo from "../Image/hello.png";
import Ilogo from "../Image/Ilogo.png";
import facebook from "../Image/facebook.png";
import IG from "../Image/instagram.png";
import Line from "../Image/line-logo.png";
import Phone from "../Image/phone-call.png";
import Email from "../Image/email.png";

export default function WelcomePage() {
  let history = useHistory();

  function handleResumeClick() {
    history.push("/home");
  }

  function clickSocial() {
    <alert>ssss</alert>;
  }

  return (
    <div className="bg">
      <div className="WelcomePageBox">
        <div className="WelcomePage-Text-Im">
          <img
            className="Ilogo"
            src={Ilogo}
            alt="I"
            width="70px"
            height="76px"
          />
          <h1>'m</h1>
        </div>
        <div className="header">
          <div className="ImageHello">
            <img src={hellologo} alt="Hello" width="48px" height="48px" />
          </div>
          <div className="WelcomePage-Text-Name">
            <h2 className="name">Putipong Moramontree</h2>
          </div>
          <div className="WelcomePage-Text-Career">
            <h3>FRONTEND DEVELOPER</h3>
          </div>
        </div>
      </div>
      <div className="LogoSocial">
        <a onClick={clickSocial}>
          <img
            src={facebook}
            width="25px"
            style={{ margin: "5px", cursor: "pointer" }}
          />
        </a>
        <img
          src={IG}
          width="25px"
          style={{ margin: "5px", cursor: "pointer" }}
        />
        <img
          src={Line}
          width="25px"
          style={{ margin: "5px", cursor: "pointer" }}
        />
        <img
          src={Phone}
          width="25px"
          style={{ margin: "5px", cursor: "pointer" }}
        />
        <img
          src={Email}
          width="25px"
          style={{ margin: "5px", cursor: "pointer" }}
        />
      </div>
      <button
        style={{ borderRadius: "100%", width: "20px", height: "20px" }}
      ></button>
    </div>
  );
}
