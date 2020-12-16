import React, { useContext } from "react";
import { DataContext } from "../Context/GlobalContext";
import { useHistory } from "react-router-dom";
import ImageContainer from "../Components/ImageContainer";

const AgePage = () => {
  const { age, setAge } = useContext(DataContext);
  const history = useHistory();

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age !== "") {
      history.push("/InterestPage");
    }
  };

  const list = [
    { "<25": "Younger than 25" },
    { "25=<50": "Between 25 and 50" },
    { "50=<": "Older than 50" },
  ];

  return (
    <div>
      <h1>This is age page.</h1>
      <ImageContainer />
      <form onSubmit={handleSubmit}>
        <label>
          Pick your age range:
          <select value={age} onChange={handleChange}>
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

export default AgePage;
