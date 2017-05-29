// Packages
import React from 'react'

const Loading = () => (
  <aside>
    <section>
      <img src="/static/loading.gif" />
      <p>Loading Events...</p>
    </section>

    <style jsx>
      {`
      aside {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        background: #F5F5F5;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      img {
        width: 30px;
        margin: 0 auto;
        display: block;
      }

      p {
        margin: 10px 0 0 0;
        color: #999;
        font-size: 13px;
      }
    `}
    </style>
  </aside>
)

export default Loading
