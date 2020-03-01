import React from "react";
import annie from "../img/annie.jpg";
import ryan from "../img/ryan.jpg";
import youX from "../img/you-x.jpg";
import { Link } from "react-router-dom";
class Dashboard extends React.Component {
  render() {
    return (
      <div className="container dashboard ">
        <div className="col-sm main">
          <h1 className="title">Be Determined</h1>

          <div className="col-sm ">
            <h3>Projects that Make a difference</h3>
          </div>
          <div className="col-sm">
            <small>
              <strong>
                <Link style={{ color: "black" }} to="/projects">
                  Check out my projects
                </Link>
              </strong>
            </small>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-sm-4">
              <div
                onClick={() => {
                  window.location.assign("/about");
                }}
                className="card bg-dark text-white "
              >
                <img src={ryan} className="card-img" alt="projects"></img>
                <div className="card-img-overlay">
                  <div className="card-header">Welcome</div>

                  <div className="card-body">
                    <h5 className="card-title">Hey, I’m Beta.</h5>
                    <p className="card-text">
                      I’m an aspiring software Development,making the road to
                      Full-Stack Development
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                onClick={() => {
                  window.location.assign("/projects");
                }}
                className="card bg-dark text-dark "
                style={{ maxWidth: "460px", maxheight: "50px" }}
              >
                <img src={annie} className="card-img" alt="about"></img>
                <div className="card-img-overlay">
                  <div className="card-header">Some Projects</div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Do you also like to make the difference?
                    </h5>
                    <p className="card-text">
                      Find some of my projects in here!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                onClick={() => {
                  window.location.assign("/contact");
                }}
                className="card bg-dark text-white "
                style={{ maxWidth: "460px", maxheight: "50px" }}
              >
                <img src={youX} className="card-img" alt="projects"></img>
                <div className="card-img-overlay">
                  <div className="card-header">Want to talK?</div>

                  <div className="card-body">
                    <h5 className="card-title">Contact Me</h5>
                    <p className="card-text">Fill the Form or Email me!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
