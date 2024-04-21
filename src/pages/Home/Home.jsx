import styled from "styled-components";
import Content from "./Content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <Main>
      <Content />
      <ToastContainer />
    </Main>
  );
};

export default Home;

const Main = styled.div``;
