import * as React from 'react';
import {
    Box,
    FormControl, MenuItem, Select,
    SelectChangeEvent,
    Stack, Typography
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const commonStyles = {
    m: 1,
    border: 0,
    boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }

};

export default function Heading() {



    return (
        <Box paddingBottom="18px" marginTop="85px">
            <Stack direction='row' justifyContent='space-between' >
                <Typography className='text-[25px] font-medium text-[#212529]	'>Holdings details</Typography>
                <Stack direction='row' justifyContent='space-between' >
                    <Typography className='text-[19px] font-medium text-[#212529] pr-[10px] '>Holdings variation</Typography>
                    <KeyboardArrowUpIcon sx={{
                        color: "#53A57C"
                    }}></KeyboardArrowUpIcon>
                    <Typography className='text-[19px] font-medium text-[#53A57C]' >+1,54%</Typography>


                    <FormControl className='outline-none'>

                        <Select
                            sx={{
                                height: 30,
                                padding: 0,
                                ...commonStyles
                            }}
                        >
                            <MenuItem value="" >1d</MenuItem>
                            <MenuItem >1d</MenuItem>
                            <MenuItem >1w</MenuItem>
                            <MenuItem >1m</MenuItem>
                            <MenuItem >6m</MenuItem>
                            <MenuItem >1y</MenuItem>
                        </Select>
                    </FormControl>

                </Stack>

            </Stack>
        </Box >
    );
}