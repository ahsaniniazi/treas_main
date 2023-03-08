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
            <Box display="flex"
                marginTop={{ xs: "150px", md: '130px' }}
                position={'absolute'}
                marginLeft={{ xs: '70px', md: 9, lg: 9 }}
                flexDirection="column" >
                <Box display="flex" flexDirection="row" >

                    <Box sx={{
                        rotate: "-6.12deg",
                        backgroundColor: "#C2EED8",
                        height: "15px",
                        width: { xs: "37px", md: "35px", lg: "35px" },
                    }}
                    >
                        <Typography sx={{
                            fontSize: "19px",
                            fontWeight: "400",
                            color: "#000000",
                            fontFamily: "Libre Baskerville",
                            position: "sticky",
                            rotate: "6.12deg",
                            marginTop: { xs: "-6px", md: "-5px" }

                        }}
                            variant='h3'
                            gutterBottom
                            component='div'
                        >
                            treas
                        </Typography>
                    </Box>
                    <Typography sx={{

                        marginTop: "-9px",
                        fontFamily: "Libre Baskerville",
                        fontWeight: "400",
                        color: "#000000",
                        fontSize: "19px",
                    }}

                    >
                        ury </Typography>
                </Box>
                <Typography
                    variant='h3'
                    sx={{ fontSize: "24px", fontFamily: "Libre Baskerville", fontWeight: "400", color: '#000000' }}>
                    $818,714</Typography>
            </Box>

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
                        layout="vertical"
                        // verticalAlign="middle"
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
        </React.Fragment >
    );
}