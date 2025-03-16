import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  // console.log("showTextAnchor:", showTextAnchor); // Check if it's true
  // console.log("label:", label); // Check if label is correct
  // console.log("totalAmount:", totalAmount); // Check if totalAmount is correct

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
          label={({ cx, cy }) =>
            showTextAnchor ? (
              <>
                <text
                  x={cx}
                  y={cy - 15}
                  textAnchor="middle"
                  fill="#666"
                  fontSize="14px"
                >
                  {label}
                </text>
                <text
                  x={cx}
                  y={cy + 10}
                  textAnchor="middle"
                  fill="#333"
                  fontSize="24px"
                  fontWeight="semi-bold"
                >
                  {totalAmount}
                </text>
              </>
            ) : null
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={CustomTooltip} />
        <Legend content={CustomLegend} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
