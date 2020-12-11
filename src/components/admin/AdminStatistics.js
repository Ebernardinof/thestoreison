import React from "react";

export const AdminStatistics = () => {
  return (
    <div className="main-content">
      <div className="ui grid stackable padded">
        <div className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
          <div className="ui purple statistic">
            <div className="value">150+</div>
            <div className="label">Events</div>
          </div>
        </div>
        <div className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
          <div className="ui purple statistic">
            <div className="value">60+</div>
            <div className="label">Selled Tickets</div>
          </div>
        </div>
        <div className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
          <div className="ui purple statistic">
            <div className="value">80+</div>
            <div className="label">Merchants</div>
          </div>
        </div>
      </div>
    </div>
  );
};
