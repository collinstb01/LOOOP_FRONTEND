import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast } from "react-toastify";

function Buttons() {
  const [email, setEmail] = useState("");
  const [thereIsEmail, setThereIsEmail] = useState(false);
  const thereIsEmailOnLocalStorage = window.localStorage.getItem("email")
    ? true
    : false;

  const joinWaitlist = () => {
    if (email == "") {
      return toast.error("Please Enter an email address", {});
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address");
    }
    if (!thereIsEmail || !thereIsEmailOnLocalStorage) {
      window.localStorage.setItem("email", email);
      setThereIsEmail(true);
      toast("SWEET, Now Connect Your Wallet");
    }
  };

  return (
    <Main className="flex flex-col flex-wrap justify-between">
      <div className="lg:flex w-100">
        <div>
          <input
            type="text"
            placeholder="Enter your Email"
            value={
              thereIsEmail || thereIsEmailOnLocalStorage
                ? window.localStorage.getItem("email")
                : email
            }
            className="mb-4 lg:mb-0  lg:h-16 h-14 lg:w-96 mr-0 lg:mr-6"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex">
          {thereIsEmail || thereIsEmailOnLocalStorage ? (
            <div className="lg:h-16 h-14 lg:w-48 w-full">
              <WalletMultiButton
                style={{
                  height: "64px",
                  width: "192px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </div>
          ) : (
            <button
              className="lg:h-16 h-14 lg:w-48 w-full"
              onClick={() => joinWaitlist()}
            >
              Join waitlist
            </button>
          )}
        </div>
      </div>
    </Main>
  );
}

export default Buttons;

const Main = styled.div`
  button {
    background-color: #ff6d1b;
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 18px;
    border-radius: 15px;
    height: -webkit-fill-available;
  }

  input {
    border: 1px solid #c0c0c0;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 18px;
    font-family: "GeneralSans-Variable";
    color: #000000a5;
  }
`;
