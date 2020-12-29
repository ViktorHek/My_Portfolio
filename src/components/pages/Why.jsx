import React from "react";
import "../../index.css";
import Data from "../../data.json";

function Why() {
  return (
    <div className="whyContainer">
      <h1 id="why-header">Why?</h1>
      <p>Why should you hire me? you might ask.</p>

      <div className="posts">
        {Data.map((post) => {
          return (
            <div key={post.id} className="post">
              <h3>{post.name}</h3>
              <p>{post.content1}</p>
              <p>{post.content2}</p>
              <p>{post.content3}</p>
              <p>{post.content4}</p>
              <p>{post.content5}</p>
              <p>{post.content6}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Why;