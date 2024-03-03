import React, { useState } from "react";
import "./tagsJsx.scss";

import { useTranslations } from "../../i18n/utils";

const TagsJsx = ({
  allTags,
  setTagVoulu,
  textVoulu,
  setTextVoulu,
  setCouleurVoulu,
  resetSearch,
  lang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInput, setIsOpenInput] = useState(false);

  const t = useTranslations(lang);

  return (
    <div id="go-tags" className={`tag-lines ${isOpen ? "open" : ""}`}>
      <div className="content">
        <div className="left">
          <button className="itemtags" onClick={() => resetSearch()}>
            {t("tags.all")}
          </button>

          <div className="itemtags">
            <img
              src="/icons/Recherche.svg"
              alt="search"
              className="svg-a-colorier"
              onClick={() => setIsOpenInput(!isOpenInput)}
            />
            <label htmlFor="search">search</label>
            <input
              className={`${isOpenInput ? "openInput" : "closeInput"}`}
              type="search"
              id="search"
              value={textVoulu}
              onChange={(e) => setTextVoulu(e.target.value)}
            />
          </div>

          <div className="divider"></div>

          {allTags.map((eachTag, key) => (
            <button
              className="itemtags"
              key={key}
              onClick={() => setTagVoulu(eachTag)}
            >
              {eachTag}
            </button>
          ))}
        </div>

        <div className="right">
          <div className="colorPick">
            <button
              className="colorChoose1 itemtags"
              onClick={() => setCouleurVoulu("client")}
            >
              <span></span>
            </button>
            <button
              className="colorChoose2 itemtags"
              onClick={() => setCouleurVoulu("opinion")}
            >
              <span></span>
            </button>
            <button
              className="colorChoose3 itemtags"
              onClick={() => setCouleurVoulu("étude")}
            >
              <span></span>
            </button>
          </div>

          <img
            src="/icons/Chevron-M.svg"
            alt="more tags"
            className="seemore svg-a-colorier"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default TagsJsx;
