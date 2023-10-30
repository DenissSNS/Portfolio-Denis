import React, { useState, useEffect } from "react";

import TagsJsx from "./TagsJsx";
import EveryPostsJsx from "./EveryPostsJsx";

const ContainerPostsJsx = ({ allPosts, allTags }) => {
  const [tagVoulu, setTagVoulu] = useState("");

  // filtre tags unique
  const filtrerHashtagsUniques = (tableau) => {
    const hashtagsUniques = new Set();

    tableau.forEach((element) => {
      const hashtags = element.split(", ");
      hashtags.forEach((hashtag) => {
        hashtagsUniques.add(hashtag);
      });
    });

    const tableauHashtagsUniques = [...hashtagsUniques];
    return tableauHashtagsUniques;
  };
  const hashtagsUniques = filtrerHashtagsUniques(allTags);

  // fonction de tri sur les posts
  // useEffect pour passer que les posts voulu au bloc de posts

  const filterAllPosts = () => {
    return postsTri;
  };

  return (
    <div className="containerPosts">
      <TagsJsx
        hashtagsUniques={hashtagsUniques}
        tagVoulu={tagVoulu}
        setTagVoulu={setTagVoulu}
      />
      <EveryPostsJsx tagVoulu={tagVoulu} postsTri={allPosts} />
    </div>
  );
};

export default ContainerPostsJsx;
