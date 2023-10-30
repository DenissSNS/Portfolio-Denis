import React, { useState } from "react";

const TagsJsx = ({ hashtagsUniques, tagVoulu, setTagVoulu }) => {
  // toggle open

  const [isOpen, setIsOpen] = useState(false); // class "open"

  // renoyer dans container le # voulu
  // translation ?

  return (
    <div class="tags-lines" id="go-tags">
      {/* <div class="content">
        <select id="tag-select">
          <option value="">{t("tags.all")}</option>
          {hashtagsUniques.map((eachTag) => (
            <option value={eachTag}>{eachTag}</option>
          ))}
        </select>

        <div class="itemtags">{t("tags.all")}</div>
        <div class="itemtags">
          <img src="/icons/search.svg" alt="search" class="svg-a-colorier" />
        </div>

        <div class="divider"></div>

        {hashtagsUniques.map((eachTag) => (
          <div class="itemtags">{eachTag}</div>
        ))}
      </div>

      <img
        data-openPanel
        src="/icons/main-chevron.svg"
        alt="more"
        class="seemore svg-a-colorier"
      /> */}
    </div>
  );
};

export default TagsJsx;
