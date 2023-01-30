import { Fullscreen } from "@mui/icons-material";
import React from "react";
import RAdial from "./radial_cahrt";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    RadialBarChart,
    RadialBar,
    Legend
} from "recharts";

const Bardata = [
    {
        name: "JUL. 22",
        uv: 200,
        pv: 800,
        amt: 1400,
        cnt: 490
    },
    {
        name: "AUG. 22",
        uv: 300,
        pv: 967,
        amt: 1506,
        cnt: 590
    },
    {
        name: "SEPT. 22",
        uv: 400,
        pv: 1098,
        amt: 989,
        cnt: 350
    },
    {
        name: "OCT. 22",
        uv: 1000,
        pv: 1200,
        amt: 1228,
        cnt: 480
    },
    {
        name: "NOV. 22",
        uv: 700,
        pv: 1108,
        amt: 1100,
        cnt: 460
    },
    {
        name: "DEC. 22",
        uv: 900,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "JAN. 22",
        uv: 500,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "FEB. 22",
        uv: 800,
        pv: 680,
        amt: 1700,
        cnt: 380
    },
    {
        name: "MAR. 22",
        uv: 1000,
        pv: 680,
        amt: 1700,
        cnt: 380
    }
];


export default function App() {
    return (

        <ComposedChart
            width={1000}
            height={400}
            data={Bardata}
            margin={{
                top: 20,
                right: 20,

                left: 20
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />


            <Tooltip />
            <Legend />
            <Bar dataKey="uv" barSize={20} fill="#C2EED8" />
            <Bar dataKey="uv" barSize={20} fill="#FF9781" />
            <Line type="monotone" dataKey="uv" stroke="#000000" strokeWidth={3} />
        </ComposedChart>
    );
}
