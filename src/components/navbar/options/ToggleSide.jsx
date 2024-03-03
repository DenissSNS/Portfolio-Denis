import React, { useState, useEffect } from "react";
import "./toggleSide.scss";

const ToggleSide = () => {
  const [selectedSide, setSelectedSide] = useState("droite");

  const handleChange = (value) => {
    console.log("handleChange called with value:", value);
    localStorage.setItem("side", value);
    setSelectedSide(value);
    window.location.reload();
  };

  // useEffect(() => {
  //   console.log("test");
  //   const storedValue = localStorage.getItem("side");
  //   if (!storedValue) {
  //     handleChange("droite");
  //   }
  // }, []);

  return (
    <div className="toggleSide">
      <label htmlFor="colonne">Colonne d’infos :</label>

      <select
        name="colonne"
        id="colonne"
        value={selectedSide}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="droite">DROITE</option>
        <option value="gauche">GAUCHE</option>
      </select>
    </div>
  );
};

export default ToggleSide;
