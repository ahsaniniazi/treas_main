import { RoundaboutLeftRounded, UploadFile } from "@mui/icons-material";
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
        uv: 1100,
        pv: 300,
        cmt: 1000,


    },
    {
        name: "MAR. 22",
        uv: 800,
        pv: 150,
        cmt: 1000,

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

            <Box display="flex" flexDirection={{ xs: 'column', md: 'row', lg: 'row' }}>
                <Box display="flex" flexDirection="row" alignSelf={'end'} alignItems={'center'}
                    className='md:hidden'>

                    <Box className='rotate-[-6.12deg]  bg-[#C2EED8] 
                    h-[20px] w-[55px] max-xs:h-[10px] max-xs:w-[26px]'>
                        <Typography
                            variant='h5'
                            gutterBottom
                            component='div'
                            className='text-[24px] font-normal text-[#000000] 
                            font-[Libre Baskerville] sticky rotate-[6.12deg] mt-[-6px]
                            max-xs:text-[12px] max-xs:mt-[-3px]'
                        >
                            treas
                        </Typography>
                    </Box>
                    <Typography variant='h3' className='pl-[2px] mt-[-4px] mr-[10px] font-[Libre Baskerville] font-normal text-[#000000] text-[24px]
                        max-xs:text-[12px] max-xs:mr-[5px] max-xs:mt-0'>
                        export </Typography>
                    <UploadFile className="text-black" onClick={handleHistory} ></UploadFile>
                </Box>
                <RAdial />
                <Container>
                    <Box display="flex" justifyContent="space-between" marginTop={{ xs: '16px' }}>
                        <Box className='max-xs:hidden'>
                            <Typography className="font-medium text-[22px] text-black max-xs:text-[12px]" > 1496,518 $US </Typography>
                            <Typography className="font-medium text-[12px] max-xs:text-[10px] text-[#979797]">10 nov. 2022, 0
                                3:24</Typography>
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems={'center'} className='max-xs:hidden'>

                            <Box className='rotate-[-6.12deg]  bg-[#C2EED8] 
                                h-[20px] w-[55px] max-xs:h-[10px] max-xs:w-[26px]'>
                                <Typography
                                    variant='h5'
                                    gutterBottom
                                    component='div'
                                    className='text-[24px] font-normal text-[#000000] 
                                    font-[Libre Baskerville] sticky rotate-[6.12deg] mt-[-6px]
                                    max-xs:text-[12px] max-xs:mt-[-3px]'
                                >
                                    treas
                                </Typography>
                            </Box>
                            <Typography variant='h3' className='pl-[2px] mt-[-4px] mr-[10px] font-[Libre Baskerville] font-normal text-[#000000] text-[24px]
                            max-xs:text-[12px] max-xs:mr-[5px] max-xs:mt-0'>
                                export </Typography>
                            <UploadFile className="text-black" onClick={handleHistory} ></UploadFile>
                        </Box>
                        <Modal
                            open={openhistory}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                            className='bg-[#ffffffe6]'

                        >
                            <Box sx={{
                                ...style,
                                width: { xs: 270, md: 700 },
                                height: { xs: 300, md: 500 }
                            }} borderColor="#979797">
                                <Box border="1px"
                                    position="absolute" top="-22px" right="-20px" >
                                    <Image src="image/back icon.svg" alt="Fund me" width={40} height={40} onClick={handleClose}
                                        className="bg-[#fff] border rounded-full relative border-[#979797] px-[5px] py-[5px]" />
                                </Box>

                                <Box display="flex" flexDirection="row" alignItems={'center'}
                                    marginLeft={{ xs: 5, md: 30 }}
                                    marginBottom={5}
                                    marginTop={5}>

                                    <Box className='rotate-[-6.12deg]  bg-[#C2EED8] 
                                    h-[20px] w-[68px] max-xs:h-[10px] max-xs:w-[35px]'>
                                        <Typography
                                            variant='h5'
                                            gutterBottom
                                            component='div'
                                            className='text-[30px] font-normal text-[#000000] 
                                            font-[Libre Baskerville] sticky rotate-[6.12deg] mt-[-9px]
                                            max-xs:text-[16px] max-xs:mt-[-6px]'
                                        >
                                            treas
                                        </Typography>
                                    </Box>
                                    <Typography variant='h3' className='pl-[2px] mt-[-4px] mr-[10px] font-[Libre Baskerville] font-normal text-[#000000] text-[30px]
                                        max-xs:text-[16px] max-xs:mr-[5px] max-xs:mt-0'>
                                        export </Typography>
                                    <UploadFile className="text-black max-xs:w-[24px] max-xs:h-[24px]"></UploadFile>
                                </Box>
                                <Typography className='text-[30px] pt-[12px] pl-[45px] text-[#000000]
                                max-xs:pl-0 max-xs:text-[16px]'>
                                    Export your treas
                                </Typography>

                                <Typography className='text-[20px] pl-[45px] text-[#64626A]
                                max-xs:pl-0 max-xs:text-[12px]'>
                                    If you want to scan other blockchains, add and manage multiple wallets create your account for free.
                                </Typography>

                                <Typography className='text-[18px] pl-[45px] pt-[20px] text-[#FF6846]
                                max-xs:pl-0 max-xs:text-[12px]'>
                                    Create your treas
                                    <KeyboardArrowRightIcon className='text-[#FF6846]' onClick={handleClose} />
                                </Typography>


                            </Box>
                        </Modal>
                    </Box>
                    <Box overflow={{ xs: 'scroll' }} className='scrollStyle'>
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
                    </Box>
                </Container>
            </Box >
        </React.Fragment>
    );
}