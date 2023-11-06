import React, { useState, useEffect } from "react";
import "./containerPostsJsx.scss";
import "./tagsJsx.scss";

import TagsJsx from "./TagsJsx";
import EveryPostsJsx from "./EveryPostsJsx";

const ContainerPostsJsx = ({ allPosts, allTags, lang }) => {
  const [tagVoulu, setTagVoulu] = useState("");
  const [textVoulu, setTextVoulu] = useState("");
  const [couleurVoulu, setCouleurVoulu] = useState("");

  // --- tri les posts selon tag ---
  const [postsTri, setPostsTri] = useState([]);

  const filterAllPosts = (allPosts) => {
    const postsTri = allPosts
      .filter((each) => each.data.tags.includes(tagVoulu))
      .filter((each) => each.data.type.includes(couleurVoulu))
      .filter((each) =>
        each.data.title.toLowerCase().includes(textVoulu.toLowerCase())
      );

    setPostsTri(postsTri);
  };

  useEffect(() => {
    filterAllPosts(allPosts);
  }, [tagVoulu, textVoulu, couleurVoulu]);

  const resetSearch = () => {
    setTagVoulu("");
    setCouleurVoulu("");
    setTextVoulu("");
  };

  return (
    <div className="containerPosts">
      <TagsJsx
        allTags={allTags}
        setTagVoulu={setTagVoulu}
        textVoulu={textVoulu}
        setTextVoulu={setTextVoulu}
        setCouleurVoulu={setCouleurVoulu}
        resetSearch={resetSearch}
        lang={lang}
        client:load
      />
      <EveryPostsJsx postsTri={postsTri} client:load />
    </div>
  );
};

export default ContainerPostsJsx;
