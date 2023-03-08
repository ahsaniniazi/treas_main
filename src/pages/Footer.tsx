import * as React from 'react';
import { Box, Divider, Typography } from '@mui/material';
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

                <Box display="flex" justifyContent="space-between"
                    flexDirection={{ xs: 'column-reverse', md: 'row', lg: 'row' }}
                    paddingLeft={{ xs: '20px', md: '113px', lg: '113px' }}
                    paddingRight={{ xs: '30px', md: '262px', lg: '262px' }}
                    paddingTop={{ xs: '20px', md: '81px', lg: '81px' }}
                    paddingBottom={{ xs: '11px', md: '80px', lg: '80px' }}
                    sx={{ backgroundColor: "#000" }}>

                    <Box display="flex"
                        justifyContent={{ xs: 'space-between', md: 'start' }}
                        alignItems={{ xs: 'self-end', md: 'self-start' }}
                        flexDirection={{ xs: 'row', md: "column", lg: 'column' }}
                    >

                        <Box display={'flex'}
                            flexDirection={{ xs: 'column-reverse', md: 'column', lg: 'column' }}>

                            <Box sx={{

                                backgroundColor: "#FFFFFF",
                                rotate: "-6.12deg",
                                height: { xs: "30px", md: "42px" },
                                width: { xs: "85px", md: "112px", lg: "112px" },
                                marginTop: "12px",
                                marginBottom: "3px"


                            }}

                            >


                                <Typography
                                    sx={{
                                        fontSize: { xs: "40px", md: "60px" },
                                        fontWeight: "400",
                                        color: "#000000",
                                        fontFamily: "Libre Baskerville",
                                        position: "sticky",
                                        rotate: "6.12deg",
                                        marginTop: { xs: "-20px", md: "-30px" }

                                    }}
                                    gutterBottom
                                    component='div'

                                >
                                    treas
                                </Typography>
                            </Box>

                            <Box paddingBottom={6} paddingTop={3} display={'flex'}>
                                <LinkedInIcon className='text-[#FFFFFF] text-[30px] p-[5px] border border-[#E8E7E83d] rounded-full mr-[16px]' />
                                <TwitterIcon className='text-[#FFFFFF] text-[30px] p-[5px] border border-[#E8E7E83d] rounded-full mr-[16px]' />
                                <FacebookIcon className='text-[#FFFFFF] text-[30px] p-[5px] border border-[#E8E7E83d] rounded-full mr-[16px]' />
                            </Box>
                        </Box>
                        <Box marginBottom={{ xs: '15px' }}>
                            <Typography sx={{ color: "#8E8C95", fontSize: "16px" }}
                            >@2022</Typography>
                        </Box>

                    </Box>


                    <Box display="flex"
                        justifyContent="space-between"
                        gap={{ xs: 5, md: 10, lg: 10 }}
                        flexWrap={{ xs: 'wrap', md: 'nowrap', lg: 'nowrap' }}>
                        <Box display="flex"
                            flexDirection="column"
                            gap={{ xs: '5px', md: '10px', lg: '10px' }}
                        >
                            <Typography className="text-[14px] max-xs:text-[12px] font-bold pb-[8px] text-[#FFFFFF]">Services</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">Dashboard</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">Track</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">Reports</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">Compliance</Typography>

                        </Box>
                        <Box display="flex"
                            flexDirection="column"
                            gap={{ xs: '5px', md: '10px', lg: '10px' }}
                        >
                            <Typography className="text-[14px] max-xs:text-[12px] font-bold pb-[8px] text-[#0000]">Services</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">treas Swap</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">treas Yield</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">treas Insurance</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">treas Payout</Typography>

                        </Box>
                        <Box display="flex"
                            flexDirection="column"
                            gap={{ xs: '5px', md: '10px', lg: '10px' }}
                        >
                            <Typography className="text-[14px] max-xs:text-[12px] font-bold pb-[8px] text-[#FFFFFF]">More</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">Careers</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">Blog</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">Roots</Typography>
                            <Typography className="text-[14px] max-xs:text-[12px] text-[#8E8C95] ">Contact</Typography>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </React.Fragment >
    );
}