import React, { useState } from "react";
import "./tagsJsx.scss";

const TagsJsx = ({ allTags, setTagVoulu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="go-tags" className={`tag-lines ${isOpen ? "open" : ""}`}>
      <div className="content">
        <button className="itemtags" onClick={() => setTagVoulu("")}>
          All
        </button>
        <div className="itemtags">
          <img
            src="/icons/search.svg"
            alt="search"
            className="svg-a-colorier"
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
        <img
          src="/icons/main-chevron.svg"
          alt="more"
          className="seemore svg-a-colorier"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

export default TagsJsx;