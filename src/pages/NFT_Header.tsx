import { Box, FormControl, IconButton, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import * as React from 'react';

const commonStyles = {
    m: 1,
    border: 1,

};

export default function NFT_Head() {

    return (
        <React.Fragment>
            <Box display="flex" justifyContent="space-between" borderBottom="solid" borderColor='#D1D0D6' marginTop="50px" marginBottom="38px" >
                <Box display="flex" justifyContent="space-evenly" >

                    <Box > <Typography className='  ml-[20px] p-[10px] text-[25px]'>treasury </Typography></Box>
                    <Box sx={{ ...commonStyles, borderColor: '#D1D0D6' }} display="flex" alignItems="center"
                        height={40} width={200}>
                        <Typography className=' ml-[20px] p-[10px]  text-[12px]
                     font-semibold text-center'  >JUL. <br /> 2022 </Typography> <EastIcon />
                        <Typography className=' ml-[20px] p-[10px] text-[12px] text-center
                     font-semibold'  >MAR.<br /> 2023   </Typography> <KeyboardArrowDownIcon className='pr-[5px]' />
                    </Box>
                    <Box><Typography className='  ml-[20px] p-[10px] text-[#979797] text-[20px]'> NFTs </Typography></Box>
                    <Box><Typography className='   ml-[20px] p-[10px] text-[#979797] text-[20px]'> History </Typography></Box>
                </Box>
                <Box display="flex" justifyContent="space-around" alignItems="center">
                    <ShareOutlinedIcon className='mr-[20px]' />
                    <FormControl>

                        <SettingsOutlinedIcon>

                            <MenuItem value={10} >All Networks   1223,3 $US</MenuItem>
                            <MenuItem value={20}>Ethereum   1223,3 $US</MenuItem>
                            <MenuItem value={30}>BSC   1223,3 $US</MenuItem>
                            <MenuItem value={40}>Moonriver   1223,3 $US</MenuItem>
                            <MenuItem value={50}>Polygon   1223,3 $US</MenuItem>
                            <MenuItem value={60}>Avalanche   1223,3 $US</MenuItem>
                            <MenuItem value={70}>Fantom   1223,3 $US</MenuItem>
                            <MenuItem value={80}>Arbitrum   1223,3 $US</MenuItem>
                            <MenuItem value={90}>Gnosis Chain   1223,3 $US</MenuItem>
                            <MenuItem value={99}>Aurora   1223,3 $US</MenuItem>

                        </SettingsOutlinedIcon>
                    </FormControl>
                </Box>
            </Box>
        </React.Fragment>
    );
}
