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
                        <Typography className="font-medium text-[60px] text-[#FFFFFF]" > treas </Typography>
                        <Box paddingBottom={6} paddingTop={3}>
                            <LinkedInIcon className='text-[#FFFFFF] text-[30px] p-[5px] border rounded-full mr-[16px]' />
                            <TwitterIcon className='text-[#FFFFFF] text-[30px] p-[5px] border rounded-full mr-[16px]' />
                            <FacebookIcon className='text-[#FFFFFF] text-[30px] p-[5px] border rounded-full mr-[16px]' />
                        </Box>
                        <Typography className='text-[#8E8C95] text-[12px]' >@2022</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" >
                        <Box display="flex" flexDirection="column" marginLeft={4} >
                            <Typography className="text-[14px] font-bold pb-[8px] text-[#FFFFFF]">Services</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">Dashboard</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">Reports</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">treas Swap</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">treas Insurance</Typography>

                        </Box>
                        <Box display="flex" flexDirection="column" marginLeft={6}>
                            <Typography className="text-[14px] font-bold pb-[8px] text-[#0000]">Services</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">Track</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">Compliance</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">treas Yield</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">treas Payout</Typography>

                        </Box>
                        <Box display="flex" flexDirection="column" marginLeft={6}>
                            <Typography className="text-[14px] font-bold pb-[8px] text-[#FFFFFF]">More</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">Careers</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">Blog</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">Roots</Typography>
                            <Typography className="text-[14px] text-[#8E8C95] pt-[10px] pb-[10px]">Contact</Typography>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}
