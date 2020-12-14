import React, { Component } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

export default class AdminChart extends Component {
  render() {
    return (
      <div className="ui grid stackable padded">
        <div
          className="four wide computer eight wide tablet sixteen wide mobile column"
          id="canvas"
        >
          <h3>Sells</h3>
          <Doughnut
            data={{
              labels: ["Lisbon", "France", "Pequim", "Azores", "Brazil"],
              datasets: [
                {
                  label: " # of events",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
                // {
                //   label: "Quantity",
                //   data: [10, 14, 67, 59, 44],
                //   backgroundColor: "orange",
                //   borderColor: "red",
                // },
              ],
            }}
            height={150}
            width={150}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div className="two wide computer eight wide tablet sixteen wide mobile  center aligned column">
          <div className="ui purple statistic" style={{ paddingTop: "50px" }}>
            <div className="value">80+</div>
            <div className="label">Tickets</div>
          </div>
          <br />
          <br />
          <div className="ui teal statistic">
            <div className="value">20+</div>
            <div className="label">Events</div>
          </div>
        </div>

        <div
          className="five wide computer eight wide tablet sixteen wide mobile column"
          id="canvas"
        >
          <h3>Last Year</h3>
          <Bar
            data={{
              labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
              datasets: [
                {
                  label: " # of events",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
                {
                  label: "Quantity",
                  data: [10, 14, 67, 59, 44],
                  backgroundColor: "orange",
                  borderColor: "orange",
                },
              ],
            }}
            height={150}
            width={150}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div
          className="five wide computer eight wide tablet sixteen wide mobile column"
          id="canvas"
        >
          <h3>Current Year</h3>
          <Bar
            data={{
              labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
              datasets: [
                {
                  label: " # of events",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
                {
                  label: "Quantity",
                  data: [10, 14, 67, 59, 44],
                  backgroundColor: "orange",
                  borderColor: "red",
                },
              ],
            }}
            height={150}
            width={150}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  }
}
