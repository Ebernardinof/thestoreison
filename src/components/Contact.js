import React from "react";
import "../index.css";
import gmail from "../img/gmail_48px.png";
import linkedin from "../img/linkedin_40px.png";
import github from "../img/github_32px.png";
import Modal from "./Modal";

class Contact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    textarea: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
  };

  onFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  render() {
    return (
      <div className=" container ">
        <h3 style={{ textAlign: "center", padding: "20px" }}>Want To talk?</h3>
        <div className="row">
          <div className="  col col-md-8">
            <form className="" onSubmit={this.onFormSubmit}>
              <div className="contact form-group col-md-8">
                <div className="form-group col-md-8">
                  <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    onChange={this.onFormChange}
                  />
                </div>
              </div>
              <div className=" contact form-group col-md-8">
                <div className="form-group col-md-8">
                  <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    onChange={this.onFormChange}
                  />
                </div>
              </div>
              <div className="contact form-group col-md-8">
                <div className="form-group col-md-8">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="email@example.com"
                    onChange={this.onFormChange}
                  />
                </div>
              </div>

              <div className="contact form-group col-md-8">
                <div className="form-group col-md-8">
                  <label htmlFor="textarea">
                    <strong>Let me know your opinion</strong>
                  </label>
                  <textarea
                    name="textarea"
                    onChange={this.onFormChange}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div style={{ marginLeft: "130px" }}>
                <Modal
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  email={this.state.email}
                  textarea={this.state.textarea}
                />
              </div>
            </form>
          </div>
          <div className=" contact1 col col-md-4">
            <div style={{ marginLeft: "20px", margin: "20px" }} className="col">
              <img src={github} alt="github" />
              <img src={linkedin} alt="linkedin" />
              <img src={gmail} alt="gmail" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
