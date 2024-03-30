import React from "react";
import styled from "styled-components";

function Buttons() {
  return (
    <Main className="flex flex-col flex-wrap justify-between">
      <div className="lg:flex w-100">
        <div>
          <input
            type="text"
            placeholder="Enter your Email"
            className="mb-4 lg:mb-0  lg:h-16 h-14 lg:w-96 mr-0 lg:mr-6"
          />
        </div>
        <div>
          <button className="lg:h-16 h-14 lg:w-48 w-full">Join waitlist</button>
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
  }

  input {
    border: 1px solid #c0c0c0;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 18px;
    font-family: "GeneralSans-Variable";
  }
`;
