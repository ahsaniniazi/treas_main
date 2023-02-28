import * as React from 'react';
import Image from 'next/image';
import { Box, Modal, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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

export default function NFT_Head() {

    const [freshData, setFreshData] = React.useState(false);

    const handleOpen = () => {
        setFreshData(true);

    };

    const handleClose = () => {
        setFreshData(false);


    };

    return (
        <React.Fragment>

            <Box display="flex" justifyContent="space-between" marginTop="5px" marginBottom="38px" >
                <Box display="flex" justifyContent="space-evenly" >

                    <Box >
                        <Image src="image/image 129.svg" alt="fund me" width={56} height={56} />
                    </Box>



                    <Box display="flex" flexDirection="column" marginLeft="28px">
                        <Typography sx={{ color: "#000000", fontFamily: "Libre Baskerville", fontWeight: "700", fontSize: "25px" }}
                        >
                            0x391716d440c151c42cdf1c95c1d83a5427bca52c
                        </Typography>
                        <Typography display="flex" sx={{ color: "#979797", fontFamily: "Libre Baskerville", fontWeight: "700", fontSize: "16px" }}
                        >
                            0xc407...fcc9
                            <Image src="image/image 55.svg" alt='fund me' width={15} height={15} />
                        </Typography>
                    </Box>


                </Box>

                <Box display="flex" justifyContent="space-around" alignItems="center">

                    <Image src="image/image 132.svg" alt='Fund Me' width={25} height={25} className="cursor-pointer"
                        onClick={handleOpen} />
                </Box>
                <Modal
                    open={freshData}
                    onClose={handleClose}
                    className='bg-[#ffffffe6]'


                >
                    <Box sx={{ ...style, width: 700, height: 500 }} borderColor="#979797">
                        <Box border="1px"
                            position="absolute" top="-22px" right="-20px" >
                            <Image src="image/back icon.svg" alt="Fund me" width={40} height={40} onClick={handleClose}
                                className="bg-[#fff] border rounded-full relative border-[#979797] px-[5px] py-[5px] cursor-pointer" />
                        </Box>
                        <Box marginLeft={20} marginBottom={5} marginTop={5} >
                            <Box alignItems="center" marginLeft={14} marginTop={2}
                                height={40} width={200} onClick={handleOpen}>

                                <Image src="image/image 132.svg" alt='Fund Me' width={40} height={40} />
                            </Box>
                        </Box>
                        <Typography className='text-[30px] pt-[45px] pl-[45px] '>
                            Fresh data Fresh treas
                        </Typography>
                        <Typography className='text-[20px] pt-[12px] pl-[45px] text-[#64626A]'>
                            Scan any ETH treas
                        </Typography>

                        <Typography className='text-[20px] pl-[45px] text-[#64626A]'>
                            If you want to scan other blockchains, add and manage multiple wallets create your account for free.
                        </Typography>

                        <Typography className='text-[18px] pl-[45px] pt-[20px] text-[#FF6846] cursor-pointer'>
                            Create your treas
                            <KeyboardArrowRightIcon className='text-[#FF6846] cursor-pointer' onClick={handleClose} />
                        </Typography>


                    </Box>
                </Modal>
            </Box>

        </React.Fragment>
    );
}
