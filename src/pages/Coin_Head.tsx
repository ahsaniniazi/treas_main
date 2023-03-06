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
        <Box marginTop="85px">
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
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                height: 30,
                                padding: 0,
                                ...commonStyles
                            }}
                        >
                            <MenuItem value="" >
                                <Box display="flex" flexDirection="row">
                                    <Typography marginLeft="10px"> 1w</Typography>
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