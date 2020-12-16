import React, { useContext } from "react";
import { DataContext } from "../Context/GlobalContext";
import { useHistory } from "react-router-dom";
import ImageContainer from "../Components/ImageContainer";

const RelationPage = () => {
  const { relationShip, setRelationShip, canContinue } = useContext(
    DataContext
  );

  const history = useHistory();

  const handleChange = (e) => {
    setRelationShip(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (relationShip !== "") {
      history.push("/ResultPage");
    }
  };

  const list = [
    { parent: "Parent" },
    { sibling: "Sibling" },
    { other: "Other" },
  ];

  return (
    <div>
      <h1>This is relationShip page.</h1>
      <ImageContainer />
      <form onSubmit={handleSubmit}>
        <label>
          Pick your relationShip:
          <select value={relationShip} onChange={handleChange}>
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

export default RelationPage;
