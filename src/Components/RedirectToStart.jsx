import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { DataContext } from "../Context/GlobalContext";

const RedirectToStart = ({ children }) => {
  const { canContinue } = useContext(DataContext);
  return <div>{canContinue ? children : <Redirect to="/" />}</div>;
};

export default RedirectToStart;
