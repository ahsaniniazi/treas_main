import { RoundedCorner, RoundedCornerOutlined, RouteRounded } from "@mui/icons-material";
import { Box, Radio, Typography } from "@mui/material";
import { fontFamily } from "@mui/system";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";


const RadialData = [
    {
        name: "BTC",
        uv: 32,
        fill: "#C0EEF5"
    },
    {
        name: "ETH",
        uv: 44.0,
        fill: "#FFBA69"
    },
    {
        name: "USDT",
        uv: 16.0,
        fill: "#C2EED8"
    },
    {
        name: "Other",
        uv: 8.0,
        fill: "#FF9780"
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
            {/* <Box display="flex" marginTop="120px" flexDirection="column" >
                <Box display="flex" flexDirection="row" >

                    <Box className='rotate-[-6.12deg]  bg-[#C2EED8] 
                         h-[20px] w-[55px] '>
                        <Typography
                            variant='h5'
                            gutterBottom
                            component='div'
                            className='text-14px font-normal text-[#000000] 
                        font-[Libre Baskerville] sticky rotate-[6.12deg] mt-[-6px]'
                        >
                            treas
                        </Typography>
                    </Box>
                    <Typography variant='h3' className='pl-[2px] mt-[-4px] font-[Libre Baskerville] font-normal text-[#000000] text-[24px]'>
                        ury </Typography>
                </Box>
                <Typography
                    variant='h3'
                    sx={{ fontSize: "24px", fontFamily: "Libre Baskerville", fontWeight: "400" }}>
                    $818,714</Typography>
            </Box> */}

            <Box sx={{ display: "flex", direction: "column", verticalAlign: "center" }}>

                <RadialBarChart
                    width={230}
                    height={300}
                    innerRadius={125}
                    outerRadius={70}
                    barSize={3}
                    data={RadialData}


                >

                    <RadialBar

                        label={{ position: "insideStart", fill: "transparent" }}
                        background={{
                            fill: "black"
                        }}
                        // barSize={3}

                        dataKey="uv"

                    />

                    <Legend
                        iconSize={8}
                        iconType="circle"
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