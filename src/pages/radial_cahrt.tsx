import { Box, Typography } from "@mui/material";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const RadialData = [
    {
        name: "BTC",
        uv: 32,
        fill: "#8E44AD"
    },
    {
        name: "ETH",
        uv: 26.69,
        fill: "#F4D03F"
    },
    {
        name: "USDT",
        uv: 15.69,
        fill: "#45B39D"
    },
    {
        name: "Other",
        uv: 8.22,
        fill: "#BA4A00"
    },
];

const style = {
    top: 300,
    left: 40,
    lineHeight: "24px"

};
export default function RAdial() {
    return (

        <Box sx={{ display: "flex", direction: "column" }}>

            <RadialBarChart
                width={270}
                height={200}
                cx={150}
                cy={150}
                innerRadius={20}
                outerRadius={140}
                barSize={2}
                data={RadialData}
            >

                <RadialBar

                    label={{ position: "insideStart", fill: "#fff" }}
                    background

                    dataKey="uv"
                />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="radial"
                    verticalAlign="middle"
                    wrapperStyle={style}

                >

                </Legend>

            </RadialBarChart>
        </Box>
    );
}
