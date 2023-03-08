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

            <Box display="flex" justifyContent="space-between"
                marginBottom={{ xs: 0, md: '38px', lg: "38px" }} >
                <Box display="flex"
                    justifyContent="space-evenly"
                    flexDirection={{ xs: 'column', md: 'row', lg: 'row' }}
                >

                    <Box display={{ xs: 'flex' }}
                        justifyContent={{ xs: 'space-between' }}
                    >
                        <Box>
                            <Image src="image/image 129.svg" alt="fund me" width={56} height={56} />
                        </Box>
                        <Box display={{ xs: 'flex', md: "none", lg: "none" }} >

                            <Image src="image/image 132.svg" alt='Fund Me' width={25} height={25}
                                onClick={handleOpen} />
                        </Box>
                    </Box>



                    <Box display="flex" flexDirection="column" className="max-xs:mt-2"
                        marginLeft={{ xs: '0px', md: "28px", lg: '28px' }}
                    >
                        <Typography sx={{
                            color: "black",
                            fontFamily: "Libre Baskerville",
                            fontWeight: "700",
                            fontSize: { xs: "12px", md: "25px" }
                        }}
                        >
                            0x9c5083dd4838e120dbeac44c052179692aa5dac5
                        </Typography>
                        <Typography sx={{
                            display: "flex",
                            fontSize: { xs: "11px", md: "16px" },
                            color: "#979797",
                            gap: "2",
                            marginTop: "1px",
                            marginRight: "7px",

                        }}
                        >
                            0xc407...fcc9
                            <Image src="image/image 55.svg" alt='fund me' width={15} height={15} />
                        </Typography>
                    </Box>


                </Box>

                <Box display={{ xs: 'none', md: "flex", lg: "flex" }} justifyContent="space-around" alignItems="center" sx={{
                }} >

                    <Image src="image/image 132.svg" alt='Fund Me' width={25} height={25}
                        onClick={handleOpen} />
                </Box>
                <Modal
                    open={freshData}
                    onClose={handleClose}
                    className='bg-[#ffffffe6]'


                >
                    <Box sx={{
                        ...style,
                        width: { xs: 280, md: 500 },
                        height: { xs: 300, md: 400 }
                    }} borderColor="#979797">
                        <Box border="1px"
                            position="absolute" top="-22px" right="-20px" >
                            <Image src="image/back icon.svg" alt="Fund me" width={40} height={40} onClick={handleClose}
                                className="bg-[#fff] border rounded-full relative border-[#979797] px-[5px] py-[5px]" />
                        </Box>
                        <Box marginLeft={{ xs: -3, md: 10 }}>
                            <Box alignItems="center" marginLeft={14} marginTop={2}
                                height={40} width={200} onClick={handleOpen}>

                                <Image src="image/image 132.svg" alt='Fund Me' width={40} height={40} />
                            </Box>
                        </Box>
                        <Typography sx={{
                            fontSize: { xs: "16px", md: "30px" },
                            paddingTop: "45px",
                            paddingLeft: { xs: "0px", md: "45px" },
                            color: "#00000"
                        }}>
                            Fresh data Fresh treas
                        </Typography>
                        <Typography sx={{
                            fontSize: { xs: "12px", md: "20px" },
                            paddingTop: "12px",
                            paddingLeft: { xs: "0px", md: "45px" },
                            color: "#64626A"
                        }}

                        >
                            Scan any ETH treas
                        </Typography>

                        <Typography sx={{
                            fontSize: { xs: "12px", md: "20px" },
                            paddingTop: "12px",
                            paddingLeft: { xs: "0px", md: "45px" },
                            color: "#64626A"
                        }}

                        >
                            If you want to scan other blockchains, add and manage multiple wallets create your account for free.
                        </Typography>

                        <Typography sx={{
                            fontSize: { xs: "12px", md: "18px" },
                            paddingTop: "20px",
                            paddingLeft: { xs: "0px", md: "45px" },
                            color: "#FF6846"
                        }}
                        >
                            Create your treas
                            <KeyboardArrowRightIcon sx={{ color: "#FF6846" }} onClick={handleClose} />
                        </Typography>


                    </Box>
                </Modal>
            </Box>

        </React.Fragment>
    );
}