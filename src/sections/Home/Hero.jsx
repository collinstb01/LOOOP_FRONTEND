import React from "react";
import styled from "styled-components";
import Buttons from "../../components/Buttons";

const Hero = () => {
  return (
    <Main className="w-100">
      <div className="ctn flex flex-col justify-center items-center text-center">
        <div className="">
          <p className="big flex font-normal">
            <span>
              If you could
              <span className="orange font-medium"> experience </span>
              <span> the internet like never before...</span>
            </span>{" "}
          </p>
        </div>
        <div className="mt-4 mb-8">
          <p className="small">
            Imagine a place where you could feel personally connected to your
            favorite
          </p>
          <p className="small">
            creators? It’s not a Euphoria, it’s coming soon...
          </p>
        </div>
        <p className="pb-7 text-2xl font-medium ">
          Want to be an early adventurer?
        </p>{" "}
        <Buttons />
      </div>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  padding-top: 72px;

  .ctn {
    /* width: 620px; */
  }
  .big {
    font-weight: 400;
    font-family: "GeneralSans-Variable";
    font-size: 58px;
    max-width: 640px;
    line-height: 60px;
  }

  .small {
    font-family: "GeneralSans-Variable";
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  .orange {
    color: #ff6d1b;
  }
`;
