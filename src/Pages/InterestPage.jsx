import React, { useContext } from "react";
import { DataContext } from "../Context/GlobalContext";
import { useHistory } from "react-router-dom";
import ImageContainer from "../Components/ImageContainer";

const InterestPage = () => {
  const { interest, setInterest } = useContext(DataContext);
  const history = useHistory();

  const handleChange = (e) => {
    setInterest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (interest !== "") {
      history.push("/RelationPage");
    }
  };

  const list = [{ fashion: "Fashion" }, { tech: "Tech" }, { craft: "Craft" }];

  return (
    <div>
      <h1>This is interest page.</h1>
      <ImageContainer />
      <form onSubmit={handleSubmit}>
        <label>
          Pick your interest range:
          <select value={interest} onChange={handleChange}>
            {list.map((item, index) => {
              const [value] = Object.keys(item);
              const [lable] = Object.values(item);
              return (
                <option key={`${item}-${index}`} value={value}>
                  {lable}
                </option>
              );
            })}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default InterestPage;
