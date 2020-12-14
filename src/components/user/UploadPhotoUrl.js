import React, { Component } from "react";
import { withFirebase } from "../../Firebase";

class UploadPhotoUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: "",
    };
  }
  onChange = (e) => {
    e.preventDefault();
    const photoURL = e.target.files[0];
    console.log(photoURL);
    this.setState({ photoURL });
  };

  handleImageAsFile = (e) => {
    const { photoURL } = this.state;
    e.preventDefault();
    this.setState({ photoURL });
    console.log(photoURL);
  };
  render() {
    const { photoURL } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleImageAsFile}>
        <h2 className="ui dividing header centered">Avatar</h2>
        <div className="field">
          <input
            type="file"
            name="photoURL"
            onChange={this.onChange}
            placeholder="My Photo"
            onSubmit={() => this.setState({ photoURL })}
          />
        </div>
        <button className="ui teal button">Upload </button>
      </form>
    );
  }
}
export default withFirebase(UploadPhotoUrl);
