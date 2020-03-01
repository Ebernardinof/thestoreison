import React from "react";

function Modal({ firstName, lastName, email, textarea }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-dark"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Send
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Is this Correct?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Name: {firstName} {lastName}
              </p>
              <p>Email: {email}</p>
              <p>Message: {textarea}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Change
              </button>
              <button type="button" className="btn btn-dark">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
