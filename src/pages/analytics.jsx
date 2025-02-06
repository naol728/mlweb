import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { diabetesData, keyToLabel, colors } from "./diabate";

// Remove stacking strategy (not suitable for medical data)
const customize = {
  height: 500,
  width: 800,
  margin: { top: 5 },
};

export default function Analytics() {
  // Filter out non-numeric/utility fields from the keys
  const dataKeys = Object.keys(keyToLabel).filter(
    (key) => key !== "Outcome" && key !== "id"
  );

  return (
    <div>
      <div className="flex justify-center items-center h-full">
        <div>
          <LineChart
            xAxis={[
              {
                dataKey: "id", // Use patient ID or unique identifier
                valueFormatter: (value) => `Patient ${value}`,
              },
            ]}
            series={dataKeys.map((key) => ({
              dataKey: key,
              label: keyToLabel[key],
              color: colors[key],
              showMark: false,
            }))}
            dataset={diabetesData}
            {...customize}
            sx={{
              // Target the x-axis text
              "& .MuiChartsAxis-tickLabel": {
                fill: "white", // Change this to your desired color
              },
            }}
          />

          <div className="text-center font-bold text-2xl">
            Diabetes Prediction Analytics
          </div>
        </div>
      </div>
    </div>
  );
}
