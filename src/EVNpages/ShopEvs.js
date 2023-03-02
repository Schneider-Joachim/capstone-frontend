// functionallaity over css aesthethics* 
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ShopEvs = () => {

const [make, ] = useState("");
const [model,] = useState("");
    

    return (
        // created a selector, need to create useState 
        <div>
    <label for="make-select">Select a make:</label>
    <select id="make-select">
    <option value="">Choose a make</option>
    <option value="Tesla">Tesla</option>
    <option value="Ford">Ford</option>
    </select>

    <label for="make-select">Select a model:</label>
    <select id="make-select">
        <option value="">Choose a model</option>
        <option value="Tesla">Model Y</option>
        <option value="Tesla">Model X</option>
        <option value="Ford">Mach E</option>
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