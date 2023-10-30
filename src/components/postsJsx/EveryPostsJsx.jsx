import React from "react";

const EveryPostsJsx = () => {
  // prendre lang dans url (2eme /)
  // passer en props les posts

  // pagination avec slice ?

  return (
    <div>
      {/* <ul class="work">
        {page.data.map((post) => (
          <li>
            <a href={`/${post.slug}`}>
              <div class="img-type">
                <img class="main-img" src={post.data.heroImage} alt="img" />
                <span class={`type ${post.data.type.toLowerCase()}`}>
                  {post.data.type.toUpperCase()}
                </span>
              </div>

              <div class="text">
                <span class="date">
                  · <FormattedDate date={post.data.pubDate} />
                </span>
                <h3 class="title">{post.data.title}</h3>
                <p class="desc">{post.body}</p>
                <div class="bottom">
                  <span class="tags">{post.data.tags}</span>
                  <img
                    class="right svg-a-colorier"
                    src="/icons/main-arrow.svg"
                    alt="arrow"
                    width="16px"
                    height="15px"
                  />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div class="nextPage">
        {nbPages.map((page) => (
          <a data-buttonChange href={`/${lang}/index/${page}#go-tags`}>
            {page}
          </a>
        ))}
        <button class="fleche">→</button>
      </div> */}
    </div>
  );
};

export default EveryPostsJsx;
