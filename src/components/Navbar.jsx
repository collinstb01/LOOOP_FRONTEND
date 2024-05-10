import React from "react";
import logo from "../assets/logo.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";
import styled from "styled-components";
//
const Navbar = () => {
  return (
    <Main className="flex justify-around items-center">
      <div>
        {" "}
        <img src={logo} alt="" className="lg:w-full w-9/12" />
      </div>
      <div className="WhatdIsloop">
        <h3 className="">What is looop?</h3>
      </div>
      <div className="flex">
        <a href="https://twitter.com/Loop_dapp" target="_blank">
          <img
            src={discord}
            alt=""
            srcset=""
            className="px-12 lg:w-full w-9/12"
          />
        </a>
        <a
          href="https://discord.com/channels/1213826532414586932/1213826532892483646"
          target="_blank"
        >
          <img src={twitter} alt="" srcset="lg:w-full w-9/12" />
        </a>
      </div>
    </Main>
  );
};

export default Navbar;

const Main = styled.div`
  height: 100px;

  .WhatdIsloop {
    @media (max-width: 768px) {
      display: none;
    }
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    font-family: "GeneralSans-Variable";
  }
  img {
    object-fit: contain;
  }
`;
