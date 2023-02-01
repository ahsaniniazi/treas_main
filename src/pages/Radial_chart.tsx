import { RoundedCorner } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";


const RadialData = [
    {
        name: "BTC",
        uv: 32,
        fill: "#0dcaf0"
    },
    {
        name: "ETH",
        uv: 44.0,
        fill: "#fd7e14"
    },
    {
        name: "USDT",
        uv: 16.0,
        fill: "#45B39D"
    },
    {
        name: "Other",
        uv: 8.0,
        fill: "#dc3545"
    },
];

const style = {
    top: 300,
    left: 40,
    lineHeight: "24px"

};
export default function RAdial() {
    return (
        <React.Fragment>
            <Box sx={{ display: "flex", direction: "column" }}>

                <RadialBarChart
                    width={225}
                    height={200}
                    cx={130}
                    cy={150}
                    innerRadius={30}
                    outerRadius={100}
                    barSize={2}
                    data={RadialData}

                >

                    <RadialBar

                        label={{ position: "insideStart", fill: "#000000" }}
                        background

                        dataKey="uv"

                    />

                    <Legend
                        iconSize={5}
                        width={120}
                        height={140}
                        layout="radial"
                        verticalAlign="middle"
                        wrapperStyle={style}

                    >

                    </Legend>

                </RadialBarChart>
                <Box marginTop="300px" textAlign="center" >
                    <Typography className="text-[15px] text-[#383874] font-semibold	">32.0%</Typography>
                    <Typography className="text-[15px] text-[#383874] font-semibold	">44.0%</Typography>
                    <Typography className="text-[15px] text-[#383874] font-semibold	">16.0%</Typography>
                    <Typography className="text-[15px] text-[#383874] font-semibold	">8.0%</Typography>
                </Box>
            </Box>
        </React.Fragment>
    );
}
