import React from "react";
// import ClipboardJS from "clipboard";
import hellologo from "../Image/hello.png";
import Ilogo from "../Image/Ilogo.png";
import facebook from "../Image/facebook.png";
import IG from "../Image/instagram.png";
import Line from "../Image/line-logo.png";
import Phone from "../Image/phone-call.png";
import Email from "../Image/email.png";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";

export default function WelcomePage() {
  // new ClipboardJS("#copy");
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
        <Popover>
          <PopoverTrigger>
            <img
              src={facebook}
              width="25px"
              style={{ margin: "5px", cursor: "pointer" }}
            />
          </PopoverTrigger>
          <PopoverContent style={{ backgroundColor: "white" }}>
            <PopoverArrow />
            <PopoverHeader>FB:Putipong Moramontree</PopoverHeader>
            <PopoverBody>
              <a href="https://www.facebook.com/jack.putii/">
                Putipong Moramontree
              </a>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        {/* <img
          src={facebook}
          width="25px"
          style={{ margin: "5px", cursor: "pointer" }}
        /> */}
        <Popover>
          <PopoverTrigger>
            <img
              src={IG}
              width="25px"
              style={{ margin: "5px", cursor: "pointer" }}
            />
          </PopoverTrigger>
          <PopoverContent style={{ backgroundColor: "white" }}>
            <PopoverArrow />
            <PopoverHeader>IG:putiipong.m</PopoverHeader>
            <PopoverBody>
              <a href="https://www.instagram.com/putiipong.m/">putiipong.m</a>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        {/* <img
          src={IG}
          width="25px"
          style={{ margin: "5px", cursor: "pointer" }}
        /> */}
        <Popover>
          <PopoverTrigger>
            <img
              src={Line}
              width="25px"
              style={{ margin: "5px", cursor: "pointer" }}
            />
          </PopoverTrigger>
          <PopoverContent style={{ backgroundColor: "white" }}>
            <PopoverArrow />
            <PopoverHeader>Line ID : putiipong.m</PopoverHeader>
            <PopoverBody>
              <a href="https://line.me/ti/p/nJQt98mamy">Click to add</a>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        {/* <img
          src={Line}
          width="25px"
          style={{ margin: "5px", cursor: "pointer" }}
        /> */}
        <Popover>
          <PopoverTrigger>
            <img
              src={Phone}
              width="25px"
              style={{ margin: "5px", cursor: "pointer" }}
            />
          </PopoverTrigger>
          <PopoverContent style={{ backgroundColor: "white" }}>
            <PopoverArrow />
            <PopoverHeader>Phone:</PopoverHeader>
            <PopoverBody>063-421-9781</PopoverBody>
          </PopoverContent>
        </Popover>
        {/* <img
          src={Phone}
          width="25px"
          style={{ margin: "5px", cursor: "pointer" }}
        /> */}
        <Popover>
          <PopoverTrigger>
            <img
              src={Email}
              width="25px"
              style={{ margin: "5px", cursor: "pointer" }}
            />
          </PopoverTrigger>
          <PopoverContent style={{ backgroundColor: "white" }}>
            <PopoverArrow />
            <PopoverHeader>Email:</PopoverHeader>
            <PopoverBody>Putiipong@hotmail.com</PopoverBody>
          </PopoverContent>
        </Popover>
        {/* <input id="foo" type="text" />
        <button
          id="copy"
          data-clipboard-action="copy"
          data-clipboard-target="#foo"
        ></button> */}
        {/* <img
          src={Email}
          width="25px"
          style={{ margin: "5px", cursor: "pointer" }}
        /> */}
      </div>
    </div>
  );
}
