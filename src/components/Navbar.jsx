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
        <img src={logo} alt="" />
      </div>
      <div>
        <h3 className="">What is looop?</h3>
      </div>
      <div className="flex">
        <img src={discord} alt="" srcset="" className="px-12" />
        <img src={twitter} alt="" srcset="" />
      </div>
    </Main>
  );
};

export default Navbar;

const Main = styled.div`
  height: 100px;

  h3 {
    font-weight: 500;
    font-size: 18px;
    font-family: "GeneralSans-Variable";
  }
  img {
    object-fit: contain;
  }
`;
