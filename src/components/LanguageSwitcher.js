import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "../App.css";

class LanguageSwitcher extends Component {
  change(option) {
    localStorage.setItem("lang", option.target.value);
    window.location.reload();
  }

  render() {
    const lang = localStorage.getItem("lang") || "en";
    return (
      <div className="lang">
        <select value={lang} className="ui dropdown" onChange={this.change}>
          <option value="en">EN</option>
          {/* <option value="fr">French</option> */}
          <option value="pt">PT</option>
          {/* <option value="es">Spanish</option> */}
        </select>
        {/* <div className="ui dropdown item">
          Language <i class="dropdown icon"></i>
          <div className="menu">
            <a className="item">English</a>
            <a className="item">Russian</a>
            <a className="item">Spanish</a>
          </div>
        </div> */}
      </div>
    );
  }
}
export default withTranslation()(LanguageSwitcher);
