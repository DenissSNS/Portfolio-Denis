import React, { useState, useEffect } from "react";
import "./everyPostsJsx.scss";

const EveryPostsJsx = ({ postsTri }) => {
  const [debutTab, setDebutTab] = useState(0);
  const [finTab, setFinTab] = useState(9);

  // --- change les posts quand on clique sur pagination ---
  const changePosts = (post) => {
    setDebutTab((post - 1) * 9);
    setFinTab(post * 9);
  };

  // --- la pagination ---
  const [nbPages, setNbPages] = useState([]);

  const initPagination = () => {
    setNbPages([]); // reset tab
    let arrayNb = []; // array qui
    let a = 0;

    for (let i = 0; i < postsTri.length; i += 9) {
      a += 1;
      arrayNb.push(a);
    }

    setDebutTab(0);
    setFinTab(9);
    setNbPages(arrayNb);
  };

  useEffect(() => {
    initPagination();
  }, [postsTri]);

  return (
    <div className="container-allposts">
      <ul className="work">
        {postsTri.slice(debutTab, finTab).map((post, key) => (
          <li key={key}>
            <a href={`/${post.slug}`}>
              <div className="img-type">
                <img className="main-img" src={post.data.heroImage} alt="img" />
                <span className={`type ${post.data.type.toLowerCase()}`}>
                  {post.data.type.toUpperCase()}
                </span>
              </div>

              <div className="text">
                <time dateTime={post.data.pubDate.toISOString()}>
                  ·{" "}
                  {post.data.pubDate.toLocaleDateString("fr", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3 className="title">{post.data.title}</h3>
                <p className="desc">{post.body}</p>
                <div className="bottom">
                  <span className="tags">{post.data.tags}</span>
                  <img
                    className="right svg-a-colorier"
                    src="icons/main-arrow.svg"
                    alt="arrow"
                    width="16"
                    height="15"
                  />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="nextPage">
        {nbPages.map((page, key) => (
          <a onClick={() => changePosts(page)} key={key}>
            {page}
          </a>
        ))}
        {/* <button className="fleche">→</button> */}
      </div>
    </div>
  );
};

export default EveryPostsJsx;
