import React, { useState, useEffect } from "react";
import "./containerPostsJsx.scss";
import "./tagsJsx.scss";

import TagsJsx from "./TagsJsx";
import EveryPostsJsx from "./EveryPostsJsx";

const ContainerPostsJsx = ({ allPosts, allTags, lang }) => {
  const [tagVoulu, setTagVoulu] = useState("");

  // --- tri les posts selon tag ---
  const [postsTri, setPostsTri] = useState([]);

  const filterAllPosts = (allPosts) => {
    const postsTri = allPosts.filter((each) =>
      each.data.tags.includes(tagVoulu)
    );

    setPostsTri(postsTri);
  };

  useEffect(() => {
    filterAllPosts(allPosts);
  }, [tagVoulu]);

  return (
    <div className="containerPosts">
      <TagsJsx allTags={allTags} setTagVoulu={setTagVoulu} client:load />
      <EveryPostsJsx postsTri={postsTri} client:load />
    </div>
  );
};

export default ContainerPostsJsx;
