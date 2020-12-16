// import "./App.css";
import { Switch, Route } from "react-router-dom";

import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

import StartPage from "./Pages/StartPage";
import InterestPage from "./Pages/InterestPage";
import RelationPage from "./Pages/RelationPage";
import ResultPage from "./Pages/ResultPage";
import AgePage from "./Pages/AgePage";

const RootContainer = styled.div`
  min-height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

function App() {
  return (
    <RootContainer className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/InterestPage" exact component={InterestPage} />
        <Route path="/RelationPage" exact component={RelationPage} />
        <Route path="/ResultPage" exact component={ResultPage} />
        <Route path="/AgePage" exact component={AgePage} />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </RootContainer>
  );
}

export default App;
