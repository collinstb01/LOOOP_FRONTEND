import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Buttons from "../../components/Buttons";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "react-toastify";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Hero = () => {
  const [success, setSuccess] = useState(false);
  const { connected } = useWallet();

  const saveToDB = () => {
    if (localStorage.getItem("savedOnDB") == "true") {
      return toast("you are already waitlisted on this device");
    }

    // axios
    //   .post("/user", {
    //     firstName: "Fred",
    //     lastName: "Flintstone",
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    localStorage.setItem("savedOnDB", "true");
    toast("LG, you are now in the LOOOP!");
    setSuccess(true);
  };

  useEffect(() => {
    // console.log(connected);
    if (connected == true) {
      saveToDB();
    }
  }, [connected]);

  return (
    <Main className="w-100 lg:p-16 p-5">
      <div className="ctn flex flex-col justify-center items-center text-center">
        <div className="">
          <p className="big flex font-normal lg:text-6xl text-4xl">
            <span>
              If you could
              <span className="orange font-medium"> experience </span>
              <span> the internet like never before...</span>
            </span>{" "}
          </p>
        </div>
        <div className="mt-4 mb-8">
          <p className="small lg:text-lg text-sm">
            Imagine a place where you could feel personally connected to your
            favorite
          </p>
          <p className="small lg:text-lg text-sm">
            creators? It’s not a Euphoria, it’s coming soon...
          </p>
        </div>
        <p className="pb-7 lg:text-2xl text-sm font-medium ">
          Want to be an early adventurer?
        </p>
        <Buttons />
        {success && (
          <p className="pt-2 text-sm font-medium text-green-800 ">
            Successfully Waitlisted
          </p>
        )}
      </div>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  .ctn {
  }
  .big {
    font-weight: 400;
    font-family: "GeneralSans-Variable";
    max-width: 640px;
    line-height: 60px;

    @media (max-width: 768px) {
      line-height: 40px;
    }
  }

  .small {
    font-family: "GeneralSans-Variable";
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  .orange {
    color: #ff6d1b;
  }
`;
