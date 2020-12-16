import React from "react";
import styled from "styled-components";

const ImageOutContainer = styled.div`
  display: flex;

  img {
    width: 80%;
    margin: auto;
    border-radius: 10px;
  }
`;

const ImageContainer = ({
  url = "https://source.unsplash.com/1600x900/?gift",
}) => {
  return (
    <ImageOutContainer>
      <img src={url} alt="gift from unspalsh" />
    </ImageOutContainer>
  );
};

export default ImageContainer;
