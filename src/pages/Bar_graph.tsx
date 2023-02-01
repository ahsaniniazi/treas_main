import React, { Fragment } from "react";
import RAdial from "./Radial_chart";
import {
    ComposedChart,
    Line,
    Bar,
    Tooltip,
} from "recharts";
import { Box, Container, Typography } from "@mui/material";
import { UploadFile } from "@mui/icons-material";



const Bardata = [
    {
        name: "JUL. 22",
        uv: 200,
        pv: 800,

    },
    {
        name: "AUG. 22",
        uv: 300,
        pv: 967,

    },
    {
        name: "SEPT. 22",
        uv: 400,
        pv: 1098,

    },
    {
        name: "OCT. 22",
        uv: 1000,
        pv: 1200,

    },
    {
        name: "NOV. 22",
        uv: 700,
        pv: 1108,

    },
    {
        name: "DEC. 22",
        uv: 900,
        pv: 680,

    },
    {
        name: "JAN. 22",
        uv: 500,
        pv: 680,

    },
    {
        name: "FEB. 22",
        uv: 800,
        pv: 680,

    },
    {
        name: "MAR. 22",
        uv: 1000,
        pv: 680,

    }
];


export default function Chart() {
    // const [bardata, setBardata] = React.useState([]);
    return (
        <React.Fragment>

            <Box display="flex">

                <RAdial />
                <Container>
                    <Box display="flex" justifyContent="space-between" >
                        <Box >
                            <Typography className="font-medium text-[22px]" > 1496,518 $US </Typography>
                            <Typography className="font-medium text-[12px] text-[#979797]">10 nov. 2022, 0
                                3:24</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography className="mr-[8px]">treasexport</Typography>
                            <Typography></Typography>
                            <UploadFile></UploadFile>
                        </Box>
                    </Box>
                    <ComposedChart
                        width={860}
                        height={400}
                        data={Bardata}
                        margin={{
                            top: 20,
                            right: 0,
                            left: 12
                        }}
                    >
                        <Tooltip />
                        <Bar dataKey="uv" barSize={30} fill="#C2EED8" />
                        <Bar dataKey="uv" barSize={30} fill="#FF9781" />
                        <Line type="monotone" dataKey="uv" stroke="#000000" strokeWidth={3} />
                    </ComposedChart>
                </Container>
            </Box >
        </React.Fragment>
    );
}
