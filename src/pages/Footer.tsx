import * as React from 'react';
import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const commonStyles = {
    m: 1,
    border: 1,

};

export default function NFT_Head() {

    return (
        <React.Fragment>
            <Box>
                <Box display="flex" justifyContent="space-around" paddingTop={20} paddingBottom={20} sx={{ backgroundColor: "#000" }}>
                    <Box display="flex" flexDirection="column" >
                        <Box className='rotate-[-7.12deg] mt-[50px] bg-[#FFFFFF] mb-[25px]
                         h-[53px] w-[128px] text-center'>
                            <Typography
                                variant='h3'
                                gutterBottom
                                component='div'
                                className='text-60px font-normal text-[#000000] 
                                font-[Libre Baskerville] sticky rotate-[7.12deg] cursor-pointer'
                            >
                                treas
                            </Typography>
                        </Box>
                        <Box paddingBottom={6} paddingTop={3}>
                            <LinkedInIcon className='text-[#FFFFFF] text-[30px] p-[5px] border rounded-full mr-[16px] cursor-pointer' />
                            <TwitterIcon className='text-[#FFFFFF] text-[30px] p-[5px] border rounded-full mr-[16px] cursor-pointer' />
                            <FacebookIcon className='text-[#FFFFFF] text-[30px] p-[5px] border rounded-full mr-[16px] cursor-pointer' />
                        </Box>
                        <Typography className='text-[#8E8C95] text-[12px]' >@2022</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" marginTop={5} >
                        <Box display="flex" flexDirection="column" marginLeft={4} >
                            <Typography className="text-[16px] font-bold pb-[8px] text-[#FFFFFF]">Services</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">Dashboard</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">Reports</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">treas Swap</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">treas Insurance</Typography>

                        </Box>
                        <Box display="flex" flexDirection="column" marginLeft={6}>
                            <Typography className="text-[16px] font-bold pb-[8px] text-[#0000]">Services</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">Track</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">Compliance</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">treas Yield</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">treas Payout</Typography>

                        </Box>
                        <Box display="flex" flexDirection="column" marginLeft={6}>
                            <Typography className="text-[16px] font-bold pb-[8px] text-[#FFFFFF]">More</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">Careers</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">Blog</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">Roots</Typography>
                            <Typography className="text-[16px] text-[#8E8C95] pt-[10px] pb-[10px] cursor-pointer">Contact</Typography>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}
