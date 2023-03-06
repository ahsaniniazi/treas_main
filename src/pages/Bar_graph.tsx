import { UploadFile } from "@mui/icons-material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Container, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
    Bar, ComposedChart,
    Line, Tooltip
} from "recharts";
import RAdial from "./Radial_chart";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 595,
    bgcolor: 'background.paper',
    border: "border-solid border-1 #979797",
    pt: 2,
    px: 4,
    pb: 3,
};


const Bardata = [
    {
        name: "JUL. 22",
        uv: 400,
        pv: 180,
        cmt: 250,

    },
    {
        name: "AUG. 22",
        uv: 500,
        pv: 220,
        cmt: 250,


    },
    {
        name: "SEPT. 22",
        uv: 380,
        pv: 420,
        cmt: 220,


    },
    {
        name: "OCT. 22",
        uv: 420,
        pv: 350,
        cmt: 430,


    },
    {
        name: "NOV. 22",
        uv: 500,
        pv: 700,
        cmt: 150,


    },
    {
        name: "DEC. 22",
        uv: 600,
        pv: 300,
        cmt: 560,


    },
    {
        name: "JAN. 22",
        uv: 600,
        pv: 300,
        cmt: 630,



    },
    {
        name: "FEB. 22",
        uv: 900,
        pv: 300,
        cmt: 800,


    },
    {
        name: "MAR. 22",
        uv: 800,
        pv: 100,
        cmt: 800,

    }
];


export default function Chart() {

    const [openhistory, setHistory] = React.useState(false);


    const handleHistory = () => {
        setHistory(true);
    };

    const handleClose = () => {
        setHistory(false)

    };

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
                            <Typography variant='h3' className='pl-[2px] mt-[-4px] mr-[10px] font-[Libre Baskerville] font-normal text-[#000000] text-[24px]'>
                                export </Typography>
                            <UploadFile onClick={handleHistory} ></UploadFile>
                        </Box>
                        <Modal
                            open={openhistory}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                            className='bg-[#ffffffe6]'

                        >
                            <Box sx={{ ...style, width: 700, height: 500 }} borderColor="#979797">
                                <Box border="1px"
                                    position="absolute" top="-22px" right="-20px" >
                                    <Image src="image/back icon.svg" alt="Fund me" width={40} height={40} onClick={handleClose}
                                        className="bg-[#fff] border rounded-full relative border-[#979797] px-[5px] py-[5px]" />
                                </Box>
                                <Box display="flex" flexDirection="row" marginLeft={20} marginBottom={5}>
                                    <Typography className='text-[34px] pt-[45px] pl-[45px] flex '>
                                        treas export
                                        <Typography className="ml-[20px] mt-[8px]"> <UploadFile /> </Typography>
                                    </Typography>

                                </Box>
                                <Typography className='text-[30px] pt-[12px] pl-[45px] text-[#64626A]'>
                                    Export your treas
                                </Typography>

                                <Typography className='text-[20px] pl-[45px] text-[#64626A]'>
                                    If you want to scan other blockchains, add and manage multiple wallets create your account for free.
                                </Typography>

                                <Typography className='text-[18px] pl-[45px] pt-[20px] text-[#FF6846]'>
                                    Create your treas
                                    <KeyboardArrowRightIcon className='text-[#FF6846]' onClick={handleClose} />
                                </Typography>


                            </Box>
                        </Modal>
                    </Box>
                    <ComposedChart
                        width={820}
                        height={400}
                        data={Bardata}
                        margin={{
                            top: 20,
                        }}

                    >
                        <Tooltip />
                        <Bar dataKey="uv" barSize={23} fill="#C2EED8" radius={20} />
                        <Bar dataKey="pv" barSize={23} fill="#FF9781" radius={20} />
                        <Line type="monotone" dataKey="cmt" stroke="#000000" strokeWidth={3} />
                    </ComposedChart>
                </Container>
            </Box >
        </React.Fragment>
    );
}