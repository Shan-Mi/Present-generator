import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.nav`
  background-color: #237dc8;

  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 1.5rem;

    li {
      cursor: pointer;
      color: white;
      font-weight: bold;
      letter-spacing: 0.03rem;
    }
  }
`;

const StartPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: min-content;
  align-items: center;
  justify-content: space-around;

  div {
    flex-direction: column;
    display: flex;
    align-items: center;
  }

  h1 {
    text-align: center;
    color: peru;
  }

  a {
    margin-top: 2rem;
    cursor: pointer;

    button {
      padding: 0.2rem 1rem;
    }
  }
`;

const GlobalLayout = ({ children }) => {
  return (
    <div>
      <NavWrapper>
        <ul>
          <Link to="/">
            <li>StartPage</li>
          </Link>
          <Link to="/AgePage">
            <li>AgePage</li>
          </Link>
          <Link to="/InterestPage">
            <li>InterestPage</li>
          </Link>
          <Link to="/RelationPage">
            <li>RelationPage</li>
          </Link>
          <Link to="/ResultPage">
            <li>ResultPage</li>
          </Link>
        </ul>
      </NavWrapper>
      <StartPageWrapper>{children}</StartPageWrapper>
    </div>
  );
};

export default GlobalLayout;
