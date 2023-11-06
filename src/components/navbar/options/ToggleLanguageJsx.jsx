import React from "react";
import "./toggleLanguage.scss";

const ToggleLanguageJsx = ({ route, languages, lang }) => {
  const handleChange = (value) => {
    window.location.href = value;
  };

  return (
    <div className="toggleLang">
      <label htmlFor="colonne">Langue des articles :</label>

      <select
        name="colonne"
        id="colonne"
        value={`/${lang}/${route}`}
        onChange={(e) => handleChange(e.target.value)}
      >
        {Object.entries(languages).map(([langCode, label], key) => (
          <option value={`/${langCode}/${route}`} key={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ToggleLanguageJsx;