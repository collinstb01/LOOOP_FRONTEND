import React, { useState } from "react";
import styled from "styled-components";
import first from "../../assets/sec.png";
import sec from "../../assets/sec.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import s_first from "../../assets/s_green.png";
import s_second from "../../assets/s_white.png";
import s_third from "../../assets/s_third.png";
import s_fourth from "../../assets/s_fourth.png";

const About = () => {
  const [state, setState] = useState(1);

  return (
    <Main className="pt-16 pb-32 w-100">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-xl font-medium lg:text-5xl text-2xl pb-8">
          What is looop?
        </h3>
        <div className="flex ctn">
          <div className="w-2/3" onClick={() => setState(1)}>
            <p
              className={`${
                state == 1
                  ? "orange creator text-white"
                  : "creator text-black font-medium text-base"
              } `}
            >
              For creators
            </p>
          </div>
          <div
            className="w-2/3 flex justify-center items-center"
            onClick={() => setState(2)}
          >
            <p
              className={`${
                state == 2
                  ? "orange creator text-white"
                  : "creator text-black font-medium text-base"
              } `}
            >
              For Fans
            </p>
          </div>
        </div>
      </div>

      <Banner className="pt-20 w-100 flex flex-col justify-center items-center lg:px-0 px-12">
        {state == 1 ? (
          <div className="">
            <div className="top flex flex-wrap lg:flex-nowrap lg:px-0 ">
              <div className="first mr-0 lg:mr-5 lg:pr-0 pr-4">
                <p className="lg:text-5xl text-2xl">Create & earn</p>
                <p className="lg:text-5xl text-2xl">on your own</p>
                <p className="lg:text-5xl text-4xl font-medium">terms</p>
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
                  Looop helps you create a community around your fanbase, you
                  have never been more connected to your fans than you’re about
                  to be
                </p>
                <img src={third} alt="" className="absolute bottom-0" />
              </div>

              <div className="fourth ml-0 lg:ml-5 lg:text-5xl text-2xl relative overflow-hidden lg:mt-0 mt-8 lg:pb-0 pb-28 lg:pr-0 pr-4">
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
        ) : (
          <div className="grid-container ">
            <div className="s_left relative">
              <p className="lg:text-5xl text-2xl pt-14 px-12 text-medium text-white">
                Discover & interact with new{" "}
                <span className="dis">creators</span>
              </p>
              <img
                src={s_first}
                alt=""
                className="absolute bottom-0  lg:right-7 w-ful z-10"
              />
            </div>
            <div className="s_right text-white">
              <div className="s_top pt-14 px-12">
                <p className="lg:text-5xl text-xl order-1 lg:order-1">
                  Built with the <span className="font-semibold">fans</span> in
                  mind
                </p>
                <div className="mr-3 w-full order-3 lg:order-2 z-10">
                  <img src={s_second} alt="" className="" />
                </div>
                <p className="last_text text-base lg:text-xl order-2 lg:order-3">
                  Now you can feel more closely connected with your favorite
                  creators and always be “in the loop”
                </p>
              </div>
              <div className="s_bottom">
                <div className="s_bottom_left p-8 relative">
                  <p className="text-xl lg:text-3xl text-black">
                    Interact with a{" "}
                    <span className="font-semibold">community</span> of other
                    fans
                  </p>
                  <img
                    src={s_third}
                    alt=""
                    className="absolute bottom-6 right-6"
                  />
                </div>
                <div className="s_bottom_right p-8 relative">
                  <img
                    src={s_fourth}
                    alt=""
                    className="absolute top-0 right-0"
                  />
                  <p className="pt-28 lg:text-3xl text-xl">
                    The freedom to <span className="font-semibold">choose</span>{" "}
                    what to consume
                  </p>
                  <p className="py-6 text-gray-300 text-base font-medium">
                    Your own terms
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Banner>
    </Main>
  );
};

export default About;
const Banner = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: 408px 618px;
    grid-template-rows: auto auto; /* Two rows */
    gap: 24px;

    @media (max-width: 1090px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }

  .s_left,
  .s_right {
    z-index: -22;
  }
  .s_left {
    height: 679px;
    background-color: #2dd881;
    border-radius: 32px;
  }
  .s_right {
  }

  .s_top {
    z-index: -22;
    height: 332px;
    margin-bottom: 24px;
    background-color: #9d69a3;
    border-radius: 32px;
    display: grid;
    z-index: -22;
  }
  .last_text {
    grid-column: 1 / span 2;
    padding-bottom: 90px;

    @media (max-width: 1090px) {
      padding-bottom: 0px;
      grid-column: auto;
    }
  }
  .s_bottom {
    gap: 24px;

    .s_bottom_left {
      height: 323px;
      background-color: #feea00;
      border-radius: 32px;
      z-index: -22;
    }
    .s_bottom_right {
      border-radius: 32px;
      height: 323px;
      background-color: #1e212b;
      z-index: -22;
    }
  }

  .s_bottom {
    display: grid;
    grid-template-columns:
      301px
      301px; /* Two columns */

    @media (max-width: 1090px) {
      grid-template-columns: 1fr; /* Two columns */
    }
  }

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
  .dis {
    clip-path: polygon(0 23%, 100% 14%, 94% 91%, 0 81%);
    background-color: #1e212b;
    padding-bottom: 20px;
    color: white;
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
      width: 100%;
      text-align: center;
    }
  }
`;
