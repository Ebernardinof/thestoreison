import React, { Component } from "react";
import { withFirebase } from "../../Firebase";
import AdminDashboard from "./AdminDashboard";
import { AdminStatistics } from "./AdminStatistics";
import AdminTopDash from "./AdminTopDash";
import { compose } from "recompose";
import { withAuthorization } from "../session";
import * as ROLES from "../../constants/roles";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.props.firebase.users().on("value", (snapshot) => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <h1>Admin</h1>
        <AdminDashboard />
        <AdminTopDash />
        <br />
        {loading && <div>Loading...</div>}
        <UserList users={users} />
        <AdminStatistics />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <div className="main-content">
    <div className="ui grid stackable padded ">
      <div className="column">
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th colSpan="3">
                {" "}
                <i className="icon users"></i> Users
              </th>
            </tr>
          </thead>

          {users.map((user) => (
            <tbody key={user.uid}>
              <tr>
                <td className="collapsing">Username: </td>
                <td>{user.username}</td>
              </tr>
              <tr>
                <td className="collapsing">ID: </td>
                <td>{user.uid}</td>
              </tr>
              <tr>
                <td className="collapsing">Email: </td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          ))}
        </table>
        {/* <ul>
        {users.map((user) => (
          <li key={user.uid}>
            <span>
              <strong>ID:</strong>
              {user.uid}
            </span>
            <span>
              <strong>Email:</strong>
              {user.email}
            </span>
            <span>
              <strong>Username:</strong>
              {user.username}
            </span>
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  </div>
);
const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];
export default compose(withAuthorization(condition), withFirebase)(Admin);
