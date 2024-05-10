import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Buttons from "../../components/Buttons";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";

const Hero = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const { connected, publicKey } = useWallet();

  const saveToDB = async () => {
    if (localStorage.getItem("savedOnDB") == "true") {
      return toast("you are already waitlisted on this device");
    }

    try {
      await axios.post("http://localhost:3000/waitlist/waitlist-user", {
        email: localStorage.getItem("email"),
        walletAddress: publicKey.toString(),
      });

      localStorage.setItem("savedOnDB", "true");
      toast("LG, you are now in the LOOOP!");
      setSuccess(true);
    } catch (error) {
      console.log(error);
      toast(`Sorry, ${error.response.data.error}`, { type: "error" });
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (connected == true) {
      saveToDB();
    }
  }, [connected]);

  return (
    <Main className="w-100 lg:p-16 p-5">
      <div className="ctn flex flex-col justify-center items-center text-center">
        <motion.div
          className=""
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <p className="big flex font-normal lg:text-6xl text-4xl">
            <span>
              If you could
              <span className="orange font-medium"> experience </span>
              <span> the internet like never before...</span>
            </span>{" "}
          </p>
        </motion.div>
        <div className="mt-4 mb-8">
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 2, duration: 1 }}
            className="small lg:text-lg text-sm"
          >
            Imagine a place where you could feel personally connected to your
            favorite
          </motion.p>
          <motion.p
            className="small lg:text-lg text-sm"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 3, duration: 1 }}
          >
            creators? It’s not a Euphoria, it’s coming soon...
          </motion.p>
        </div>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 4, duration: 2 }}
          className="pb-7 lg:text-2xl text-sm font-medium "
        >
          Want to be an early adventurer?
        </motion.p>
        <Buttons email={email} setEmail={setEmail} />
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
