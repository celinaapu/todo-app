import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import React from "react";

// Register the required Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const DoughnutChartPage = () => {
  // Define the data for the Doughnut chart
  const data1 = {
    // labels: ["Red", "Blue", "yellow"], // Labels for the segments
    datasets: [
      {
        label: "first Chart",
        data: [84, 16], // Values corresponding to each segment
        backgroundColor: ["#008000", "#A9A9A9"], // Colors for each segment
        borderColor: ["#ffffff", "#ffffff"],
        cutout: "70%",
        // hoverBackgroundColor: ["#008000", "#36A2EB"], // Hover colors
      },
    ],
  };
  const data2 = {
    datasets: [
      {
        label: "second chart",
        data: [46, 54],
        backgroundColour: ["#0000FF", "#A9A9A9"],
        borderColor: ["#ffffff", "#ffffff"],
        cutout: "70%",
      },
    ],
  };

  const data3 = {
    dataset: [
      {
        label: "third chat",
        data: [13, 87],
        backgroundColour: ["#FF0000", "#808080"],
        borderColor: ["#ffffff", "#ffffff"],
        cutout: "70%",
      },
    ],
  };

  // const inProgress = {
  //   data: "50",
  //   backgroundColor: "#148888",
  //   borderColor: "#FFFfff",
  //   cutout: "70%",
  // };

  // Define options (optional)
  // const options = {
  //   responsive: true, // Make the chart responsive
  //   cutout: "90%",
  //   plugins: {
  //     tooltip: {
  //       callbacks: {
  //         label: (tooltipItem) => {
  //           return `${tooltipItem.label}: ${tooltipItem.raw} units`; // Customize tooltip label
  //         },
  //       },
  //     },
  //   },
  // };
  return (
    <Link to="/chat" role="button">
      <div className=" flex flex-row text-center text-[10px]">
        <div className="w-20 h-20 ">
          <Doughnut data={data1} />
          <h2>Completed</h2>
        </div>
        <div className="w-20 h-20 text-center">
          <Doughnut data={data2} />
          <h2>In Progress</h2>
        </div>
        <div className="w-20 h-20">
          <Doughnut data={data3} />
          <h2>Not Started</h2>
        </div>
      </div>
    </Link>
  );
};

export default DoughnutChartPage;
