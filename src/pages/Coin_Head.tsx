import * as React from 'react';
import {
    Box,
    FormControl, MenuItem, Select,
    SelectChangeEvent,
    Stack, Typography
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const commonStyles = {
    border: 0,
    boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
};

export default function Heading() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };


    return (
        <Box paddingBottom={{ xs: '0px', md: "10px" }}
            marginTop={{ xs: '34px', md: "85px", lg: '85px' }}>
            <Stack direction='row'

                justifyContent='space-between' >
                <Typography className='text-[25px] font-medium text-[#212529]
                max-xs:text-[14px]
                '>Holdings details</Typography>
                <Stack direction='row'
                    alignItems={'center'}
                    justifyContent='space-between' >
                    <Typography className='max-xs:hidden text-[25px] font-medium text-[#212529] pr-[10px]
                    max-xs:text-[10px] max-xs:pr-0 
                    '>Holdings variation</Typography>
                    <Typography className='md:hidden font-medium text-[#212529]
                    max-xs:text-[10px] max-xs:pr-1 
                    '>variation</Typography>
                    <KeyboardArrowUpIcon sx={{
                        color: "#53A57C",
                        width: { xs: '12px', md: '28px' }
                    }}></KeyboardArrowUpIcon>
                    <Typography className='text-[19px] font-medium text-[#53A57C]
                    max-xs:text-[10px]
                    '>+1,54%</Typography>


                    <FormControl className='outline-none'>

                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                height: { xs: 10, md: 30, lg: 30 },
                                paddingRight: { xs: 0, md: 2 },
                                ...commonStyles
                            }}
                        >
                            <MenuItem value="" >
                                <Box display="flex" flexDirection="row">
                                    <Typography
                                        marginLeft={{ xs: 0, md: "10px" }}
                                    >1w</Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem value={10} >1d</MenuItem>
                            <MenuItem value={20}>1m</MenuItem>
                            <MenuItem value={30}>6m</MenuItem>
                            <MenuItem value={40}>1y</MenuItem>
                        </Select>
                    </FormControl>

                </Stack>
            </Stack>
        </Box >
    );
}