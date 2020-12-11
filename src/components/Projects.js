import React from "react";

import { Link } from "react-router-dom";
class Projects extends React.Component {
  render() {
    return (
      <div className="container  ">
        <h1 className="title">Projects</h1>
        <section className="blog-post-teasers">
          <article className="blog-post-teaser">
            <figure>
              <img src="" alt="" />
              <figcaption>
                <h1>
                  <a href="https://ebernardinof.github.io/fetchJS/">fetch</a>
                </h1>
              </figcaption>
            </figure>
          </article>
          <article className="blog-post-teaser">
            <figure>
              <img src="" alt="" />{" "}
              <figcaption>
                <h1>
                  <Link to="https://classificados.netlify.app/" />
                </h1>
              </figcaption>
            </figure>
          </article>
          <article className="blog-post-teaser">
            <figure>
              <img src="" alt="" />{" "}
              <figcaption>
                <h1>
                  <Link to="https://ebernardinof.github.io/html5/" />
                </h1>
              </figcaption>
            </figure>
          </article>
        </section>
      </div>
    );
  }
}

export default Projects;
