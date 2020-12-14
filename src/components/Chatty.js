import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "./session/";
import moment from "moment";

class Chatty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: "",
      username: "",
      chats: [],
      content: "",
      error: null,
    };
  }
  componentDidMount() {
    console.log(this.state.authUser);
    this.listener = this.props.firebase.onAuthUserListener(
      (authUser) => {
        this.setState({ authUser });
      },
      () => {
        this.setState({ authUser: null });
      }
    );
    this.setState({ error: null });
    this.props.firebase.chats().on("value", (snapshot) => {
      const chats = [];
      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });
      this.setState({ chats });
    });
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { authUser, username } = this.state;
    event.preventDefault();

    this.props.firebase.chats().push({
      content: this.state.content,
      timestamp: Date.now(),
      authUser: this.state.authUser.email,
      username: this.state.authUser.username,
    });
    this.setState({ content: "", authUser });
  };

  deleteMessage = (event) => {
    const { authUser, content } = this.state;
    event.preventDefault();
    if (this.authUser) {
      this.props.firebase.chats().remove();
    }
    return console.log("You cant remove this Item");
  };
  componentWillUnmount() {
    this.props.firebase.chats().off();
  }

  render() {
    const { username, content, error } = this.state;
    console.log(username);
    const isValid = content === "";
    return (
      <div className="ui grid stackable">
        <AuthUserContext.Consumer>
          {(authUser) => (
            <div
              className="twelve wide centered column"
              style={{ backgroundColor: "pink" }}
            >
              <div className="ui segment chats">
                <h3 className="ui dividing header">Messages</h3>
                {this.state.chats.map((chat) => {
                  console.log(chat);
                  return (
                    <div className="ui raised card" key={chat.timestamp}>
                      <div className="content">
                        <div className="header">
                          <img
                            className="ui avatar image"
                            src="/images/avatar/small/matt.jpg"
                          />{" "}
                          {chat.username}
                        </div>

                        <div className="meta">
                          <span className="date">
                            {moment(chat.timestamp).fromNow()}
                          </span>
                        </div>
                        <div className="description">{chat.content}</div>
                        <div className="extra content">
                          {" "}
                          <a className="author">{chat.authUser}</a>{" "}
                          <div className="right floated author">
                            <div
                              className="ui red submit  icon button"
                              onClick={this.deleteMessage}
                            >
                              <i className="trash icon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                Login in as: <strong>{authUser.username}</strong>
              </div>
              <div>
                <form className="ui form" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <input
                      onChange={this.handleChange}
                      value={this.state.content}
                    />
                  </div>
                  <div>
                    <button
                      className="ui teal button"
                      disabled={isValid}
                      type="submit"
                    >
                      Send
                    </button>
                    {error && <p>{error.message}</p>}
                  </div>
                </form>
              </div>
            </div>
          )}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}
export default withFirebase(Chatty);
