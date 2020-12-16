import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageContainer from "../Components/ImageContainer";

const StartPage = () => {
  return (
    <div>
      <h1>Generate some present for your closest one.</h1>
      <ImageContainer />
      <Link to="/AgePage">
        <button>Click to Begin!</button>
      </Link>
    </div>
  );
};

export default StartPage;
