/*import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const DoughnutChart = () => {
  // Define the data for the Doughnut chart
  const data = {
    // labels: ["Red", "Blue", "yellow"], // Labels for the segments
    datasets: [
      {
        label: "My Doughnut Chart",
        data: [84, 17], // Values corresponding to each segment
        backgroundColor: ["#008000", "#ffFFFf"], // Colors for each segment
        borderColor: ["#FFFfff", "#ffFFFf"],
        // hoverBackgroundColor: ["#008000", "#36A2EB"], // Hover colors
      },
    ],
  };

  // Define options (optional)
  const options = {
    responsive: true, // Make the chart responsive
    cutout: "70%",
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw} units`; // Customize tooltip label
          },
        },
      },
    },
  };

  return (
    <div className="w-20 h-20">
      <Doughnut data={data} options={options} />
      <h2 className="text-[10px]">Completed</h2>
    </div>
  );
};

export default DoughnutChart;*/
