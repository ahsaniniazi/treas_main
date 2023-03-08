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
                <Typography sx={{ fontSize: { xs: "14px", md: "25px" }, fontWeight: "500", color: "#212529", }}
                >Holdings details</Typography>
                <Stack direction='row'
                    alignItems={'center'}
                    justifyContent='space-between' >
                    <Typography sx={{
                        display: { xs: "none", md: "flex" },
                        fontSize: { xs: "10px", md: "25px" }, fontWeight: "500", color: "#212529",
                        paddingRight: { xs: "0px", md: "10px" }
                    }}

                    >Holdings variation</Typography>
                    <Typography sx={{
                        display: { xs: "flex", md: "none" },
                        fontSize: { xs: "10px", md: "25px" }, fontWeight: "500", color: "#212529",
                        paddingRight: { xs: "1px", md: "10px" }
                    }}

                    >variation</Typography>
                    <KeyboardArrowUpIcon sx={{
                        color: "#53A57C",
                        width: { xs: '12px', md: '28px' }
                    }}></KeyboardArrowUpIcon>
                    <Typography sx={{
                        display: { xs: "none", md: "flex" },
                        fontSize: { xs: "10px", md: "19px" }, fontWeight: "500", color: "#53A57C",
                        paddingRight: { xs: "0px", md: "10px" }
                    }}

                    >+1,54%</Typography>


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