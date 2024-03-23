import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../sections/Home/Hero";
import blacklogo from "../../assets/blacklogo.png";
import styled from "styled-components";
import About from "../../sections/Home/About";
import Reach from "../../sections/Home/Reach";
import Footer from "../../components/Footer";

function Content() {
  return (
    <Main>
      <Navbar />
      <Hero />
      <div className="w-100 flex justify-center pt-16 pb-28">
        <div className="w-2/3  box_container flex justify-around">
          <div className="box box1 flex flex-col justify-between">
            <div>
              <div className="flex">
                <p className="mr-2 connect">Connect </p>
                <p> with</p>
              </div>
              <p>all your favorite</p>
              <p className="font-medium">creators...</p>
            </div>
            <div className="img_logo">
              <img src={blacklogo} alt="" srcset="" />
            </div>
          </div>
          <div className="box box2 flex flex-col justify-between">
            <div>
              <p>Share</p>
              <p className="font-medium connectB">connect</p>
              <p className="font-medium">earn</p>
            </div>
            <div className="img_logo">
              <img src={blacklogo} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Reach />
      <Footer />
    </Main>
  );
}

export default Content;

const Main = styled.div`
  .box_container {
    .box1 {
      rotate: -10deg;
      background-color: #2dd881;
    }
    .box2 {
      rotate: 10deg;
      background-color: #9d69a3;
    }
    .box {
      .connect {
        background: black;
        clip-path: polygon(0 2%, 100% 16%, 100% 100%, 0 100%);
      }
      .connectB {
        color: black !important;
        font-weight: 600;
      }
      padding: 42px 0px 0px 36px;
      width: 326px;
      height: 349px;
      position: relative;
      border-radius: 45px;

      .img_logo {
        position: absolute;
        bottom: 0;
        left: 0;
      }
      p {
        font-size: 40px;
        color: white;
        line-height: 40px;
        font-family: "GeneralSans-Variable";
      }
    }
  }
`;
