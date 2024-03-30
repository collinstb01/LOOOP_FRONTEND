import React from "react";
import styled from "styled-components";
import Buttons from "../../components/Buttons";
import reachgreen from "../../assets/reachgreen.png";

const Reach = () => {
  return (
    <Main className="pt-30 pb-60 flex justify-center items-center">
      <div className="ctn flex flex-col justify-center items-center pt-20">
        <p className="text-white lg:text-5xl text-3xl p font-medium">
          The <span>new wave</span> of the interacting on the internet is here
        </p>
        <p className="p2 text-white pt-12 font-medium lg:text-2xl text-lg pb-6">
          Be early! Join the waitlist now
        </p>
        <div className="pb-20">
          <Buttons />
        </div>
        <img src={reachgreen} alt="" srcset="" className="img" />
      </div>
    </Main>
  );
};

export default Reach;

const Main = styled.div`
  .ctn {
    border-radius: 48px;
    position: relative;

    @media (max-width: 1100px) {
      border-radius: 0px;
    }
  }
  span {
    color: #2dd881;
  }
  .p {
    max-width: 580px;
    font-family: "GeneralSans-Variable";
    text-align: center;
    font-weight: 500;
  }
  .p2 {
  }
  .ctn {
    width: 1056px;
    background-color: #1e212b;
    z-index: -2;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
