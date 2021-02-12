import React from 'react'
import '../../index.css'
import Data from '../../data.json'

function Why() {
  return (
    <div classname="mainContainer">
      <div className="whyContainer">
        <div>
          <h1 id="why-header" className="whyHeader">
            Why should you hire me? you might ask
          </h1>
          <div className="whyText">
            {Data.map((post) => {
              return (
                <div key={post.id}>
                  <h1>{post.name}</h1>
                  <p>{post.content1}</p>
                  <p>{post.content2}</p>
                  <p>{post.content3}</p>
                  <p>{post.content4}</p>
                  <p>{post.content5}</p>
                  <p>{post.content6}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why
