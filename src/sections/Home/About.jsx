import React from "react";
import styled from "styled-components";
import first from "../../assets/sec.png";
import sec from "../../assets/sec.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";

const About = () => {
  return (
    <Main className="pt-16 pb-32 w-100">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-xl font-medium lg:text-5xl text-2xl pb-8">
          What is looop?
        </h3>
        <div className="flex ctn">
          <div className="w-2/3">
            <p className="orange creator text-white font-medium text-base">
              For creators
            </p>
          </div>
          <div className="w-2/3 flex justify-center items-center">
            <p className="fans font-medium">For Fans</p>
          </div>
        </div>
      </div>

      <Banner className="pt-20 w-100 flex flex-col justify-center items-center lg:px-0 px-12">
        <div className="">
          <div className="top flex flex-wrap lg:flex-nowrap lg:px-0 ">
            <div className="first mr-0 lg:mr-5 lg:pr-0 pr-4">
              <p className="lg:text-5xl text-2xl">Create & earn</p>
              <p className="lg:text-5xl text-2xl">on your own</p>
              <p className="lg:text-5xl text-2xl">terms</p>
              {/* <img src={third} alt="" /> */}
            </div>
            <div className="sec relative overflow-hidden lg:mt-0 mt-6 lg:pb-0 pb-80 text-xl lg:pb-0 lg:pr-0 pr-4">
              <span className="lg:text-5xl text-2xl">
                Take <span className="font-medium">control</span> of your
              </span>
              <p className="lg:text-5xl text-2xl">content</p>
              <p className="pt-4 lg:text-xl text-base pr-8">
                As a creator on looop, you have complete freedom over any
                content you choose to create.
              </p>
              <img src={sec} alt="" className="absolute bottom-0 left-0" />
            </div>
          </div>

          <div className="bottom pt-6 flex flex-wrap lg:flex-nowrap lg:px-0">
            <div className="third flex flex-col relative overflow-hidden lg:pr-0 pr-4">
              <span className="lg:text-5xl text-2xl pb-4">
                <span className="font-semibold">Connect</span> with your{" "}
                <span className="font-semibold">fans</span>
              </span>
              <p className="lg:text-xl text-base  pr-8 lg:pb-0">
                Looop helps you create a community around your fanbase, you have
                never been more connected to your fans than you’re about to be
              </p>
              <img src={third} alt="" className="absolute bottom-0" />
            </div>

            <div className="fourth ml-0 lg:ml-5 lg:text-5xl texl-2xl relative overflow-hidden lg:mt-0 mt-8 lg:pb-0 pb-28 lg:pr-0 pr-4">
              <p>And you are</p>
              <p>
                always <span className="font-semibold">in the</span>
              </p>
              <p className="font-semibold">looop...</p>
              <div className="absolute bottom-0 right-0 img img">
                <img src={fourth} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </Banner>
    </Main>
  );
};

export default About;
const Banner = styled.div`
  .top {
    width: 1056px;

    @media (max-width: 1100px) {
      width: auto;
    }
  }
  .bottom {
    width: 1056px;
    @media (max-width: 1100px) {
      width: auto;
    }
  }

  .first,
  .sec,
  .third,
  .fourth {
    border-radius: 32px;
  }
  .first {
    background-color: #1e212b;
    height: 332px;
    min-width: 408px;
    padding-top: 52px;
    padding-left: 48px;
    color: white;

    @media (max-width: 1100px) {
      width: 100%;
      min-width: 0;
    }
  }

  .sec {
    padding-top: 52px;
    padding-left: 48px;
    background-color: #2dd881;
    z-index: -2;
    height: 332px;

    width: auto;
    @media (max-width: 1100px) {
      height: auto;
      padding-bottom: 80px;
      width: 100%;
    }
  }

  .third {
    background-color: #9d69a3;
    height: 323px;
    padding-top: 48px;
    padding-left: 48px;
    color: white;
    z-index: -2;

    @media (max-width: 1100px) {
      height: auto;
      padding-bottom: 80px;
      width: 100%;
    }
  }
  .fourth {
    min-width: 408px;
    /* height: 332px; */
    padding-top: 52px;
    padding-left: 48px;
    padding-right: 48px;
    background: #ff6d1b;
    color: white;
    z-index: -2;
    @media (max-width: 1100px) {
      width: 100%;
      min-width: 0;
    }
  }
  img {
    z-index: -3;
  }
  .img {
    z-index: -1;
  }
`;

const Main = styled.div`
  width: 100%;
  .ctn {
    border-radius: 72px;
    border: 1px solid black;
    padding: 8px;
    justify-content: space-between;
    width: 416px;
    border: 1px solid black;

    @media (max-width: 768px) {
      width: 80%;
    }
    .creator {
      padding: 18.5px 43.5px;
      @media (max-width: 768px) {
        padding: 9.5px 20.5px;
      }
    }

    .fans {
      align-items: center;
      justify-content: center;
    }
    .orange {
      background-color: #ff6d1b;
      border-radius: 72px;
    }
  }
`;
