import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "../../App.css";

class AdminDashboard extends Component {
  state = {
    sidebarOpen: false,
  };
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }
  render() {
    return (
      //   sidebar
      <div
        className="ui sidebar inverted vertical menu sidebar-menu"
        id="sidebar"
      >
        <div className="item">
          <div className="header">General</div>
          <div className="menu">
            <a className="item">
              <div>
                <Link to={ROUTES.LANDING} className="link">
                  <i className="icon tachometer alternate"></i> Dashboard
                </Link>
              </div>
            </a>
          </div>
        </div>
        <div className="item">
          <div className="header">Administration</div>
          <div className="menu">
            <a className="item">
              <div>
                <Link to={ROUTES.ADMIN} className="link">
                  <i className="icon users"></i> Users
                </Link>
              </div>
            </a>
            <a className="item">
              <div>
                <i className="icon cogs"></i> Settings
              </div>
            </a>
          </div>
        </div>
        <a className="item">
          <div>
            <Link to={ROUTES.ADMINCHART} style={{ color: "white" }}>
              <i className="icon chart line"></i> Chart
            </Link>
          </div>
        </a>
        <a className="item">
          <div>
            <i className="icon lightbulb"></i> App
          </div>
        </a>
        <div className="item">
          <div className="header">Other</div>
          <div className="menu">
            <a className="item">
              <div>
                <i className="icon icon envelope"></i> Messages
              </div>
            </a>
            <a className="item">
              <div>
                <i className="icon calendar alternate"></i> Calendar
              </div>
            </a>
          </div>
        </div>
        {/* searchBar */}
        <div className="item">
          <form action="#">
            <div className="ui mini action input">
              <input type="text" placeholder="Search" />
              <button className="ui mini icon button " type="submit">
                <i className="search icon"></i>
              </button>
            </div>
          </form>
        </div>
        {/* searchBar */}
        <div className="ui segment inverted">
          <div className="ui tiny olive inverted progress">
            <div className="bar" style={{ width: "54%" }}></div>
            <div className="label">Monthly Sales</div>
          </div>
          <div className="ui tiny purple inverted progress">
            <div className="bar" style={{ width: "78%" }}></div>
            <div className="label">Total Events</div>
          </div>
        </div>
      </div>
      //   sidebar
    );
  }
}

export default AdminDashboard;
