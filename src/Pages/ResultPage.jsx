import React, { useContext } from "react";
import { DataContext } from "../Context/GlobalContext";
import ImageContainer from "../Components/ImageContainer";
import ResultComponent from "../Components/ResultComponent";
import RedirectToStart from "../Components/RedirectToStart";

const ResultPage = () => {
  const { canContinue } = useContext(DataContext);

  if (!canContinue) {
    return <RedirectToStart />;
  }

  return (
    <RedirectToStart>
      <div>
        <h1>This is resultpage</h1>
        <ImageContainer url="https://images.unsplash.com/photo-1601758066440-cbfc06a82914?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
        <ResultComponent />
      </div>
    </RedirectToStart>
  );
};

export default ResultPage;
