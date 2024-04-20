import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <Main className="w-100 flex justify-center pb-20">
      <div className="ctn grid lg:grid-cols-3 lg:text-left text-center">
        <div className="first flex items-center flex-col">
          <div className="flex lg:items-auto items-center flex-col">
            <img src={logo} alt="" className="lg:w-full w-9/12" />
            <div className="mt-4">
              <p>© 2024 Looop. </p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
        <div className="sec flex justify-center pt-16 lg:pt-0">
          <div className="">
            <p className="heading font-medium lg:text-2xl text-xl">
              Help Center
            </p>
            <ul>
              <li>About looop</li>
              <li>Contact us</li>
              <li>Terms of Service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
        <div className="third flex items-center flex-col pt-16 lg:pt-0">
          <p className="heading font-medium lg:text-2xl text-xl">
            Join the community
          </p>
          <div className="flex pt-4 items-center">
            <a
              href="https://discord.com/channels/1213826532414586932/1213826532892483646"
              target="_blank"
            >
              <img
                src={discord}
                alt=""
                className="twitter mr-8 lg:w-full w-9/12"
              />
            </a>
            <a href="https://twitter.com/Loop_dapp" target="_blank">
              <img src={twitter} alt="" className="discord lg:w-full w-9/12" />
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Footer;

const Main = styled.div`
  font-family: "GeneralSans-Variable";
  .ctn {
    border: 1px solid #c0c0c0;
    border-radius: 48px;
    width: 1056px;
    padding-top: 82.67px;
    padding-bottom: 136px;
  }
  .img {
    /* width: 144.81px; */
  }
  li {
    padding-top: 16px;
    font-weight: 400;
  }
  .twitter {
    width: 28.76px;
    height: 26px;
    /* margin-right: 32px; */
  }
  .discord {
    width: 28px;
    height: 21.34px;
  }
`;
