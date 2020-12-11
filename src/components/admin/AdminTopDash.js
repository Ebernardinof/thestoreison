import React from "react";
import AdminChart from "./AdminChart";

export default function AdminTopDash() {
  return (
    <div className="pusher">
      AdminTopDash
      <div className="main-content">
        <AdminChart />
        <div
          className="ui grid stackable padded"
          style={{ paddingTop: "40px" }}
        ></div>
        <div className="ui grid stackable padded centered">
          <div className="four wide computer eight wide tablet sixteen wide mobile column">
            <div className="ui fluid card">
              <div className="content">
                <div className="ui right floated header red">
                  <i className="icon shopping cart"></i>
                </div>
                <div className="header">
                  <div className="ui red header">98</div>
                </div>
                <div className="meta">Orders</div>
                <div className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus accusamus illum sit aliquid minima ad porro, vero
                  tempora autem eligendi blanditiis dignissimos nisi earum
                  ipsam, aut temporibus reiciendis non quam.
                </div>
              </div>
              <div className="extra content">
                <div className="ui fluid button red">more info</div>
              </div>
            </div>
          </div>
          <div className="four wide computer eight wide tablet sixteen wide mobile column">
            <div className="ui fluid card">
              <div className="content">
                <div className="ui right floated header teal">
                  <i className="icon shopping cart"></i>
                </div>
                <div className="header">
                  <div className="ui teal header">98</div>
                </div>
                <div className="meta">Eventos</div>
                <div className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus accusamus illum sit aliquid minima ad porro, vero
                  tempora autem eligendi blanditiis dignissimos nisi earum
                  ipsam, aut temporibus reiciendis non quam.
                </div>
              </div>
              <div className="extra content">
                <div className="ui fluid button teal">more info</div>
              </div>
            </div>
          </div>
          <div className="four wide computer eight wide tablet sixteen wide mobile column">
            <div className="ui fluid card">
              <div className="content">
                <div className="ui right floated header yellow">
                  <i className="icon shopping cart"></i>
                </div>
                <div className="header">
                  <div className="ui yellow header">98</div>
                </div>
                <div className="meta">Orders</div>
                <div className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus accusamus illum sit aliquid minima ad porro, vero
                  tempora autem eligendi blanditiis dignissimos nisi earum
                  ipsam, aut temporibus reiciendis non quam.
                </div>
              </div>
              <div className="extra content">
                <div className="ui fluid button yellow">more info</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
