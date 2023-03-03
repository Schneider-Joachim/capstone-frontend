// functionallaity over css aesthethics* 
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styling/ShopEvs.scss";

const ShopEvs = () => {

const [make,  setMake] = useState("");
const [model, setModel] = useState("");

const cars = [
    { make: "Tesla", model: "Model 3", price: 42000, range: "272 Miles", drivetrain: " LongRange AWD" },
    { make: "Tesla", model: "Model Y", price: 54000, range: "330 Miles", drivetrain: "LongRange AWD" },
    { make: "Ford", model: "Mach E", price: 42000, range: "230 Miles", drivetrain: "AWD" },
    { make: "Polestar", model: "Polestar 2", price: 49000, range: "260 Miles", drivetrain: "LongRange FWD" },
  ];
    

    return (
        // created a selector, need to create useState 
        <div>
    <label for="make-select">Select a make:</label>

<select id="make-select">
  <option value="">Choose a make</option>
  <option value="Tesla">Tesla</option>
  <option value="Ford">Ford</option>
  <option value="Polestar">Polestar</option>
</select>

<label for="model-select">Select a model:</label>
<select id="model-select">
  <option value="">Choose a model</option>
</select>

<table>
  <thead>
    <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Price</th>
      <th>Range</th>
      <th>Drivetrain</th>
    </tr>
  </thead>
  <tbody id="model-details">
  </tbody>
</table>
        </div>
    );
};

export default ShopEvs;