import React from "react";
import styled from "styled-components";

function Buttons() {
  return (
    <Main className="flex flex-col justify-between">
      <div>
        <input
          type="text"
          placeholder="Enter your Email"
          className="h-16 w-96 mr-6"
        />
        <button className="h-16">Join waitlist</button>
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
    width: 193px;
  }

  input {
    border: 1px solid #c0c0c0;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 18px;
    font-family: "GeneralSans-Variable";
  }
`;
