
import * as React from 'react';
import {
    FormControl, MenuItem, Select,
    Stack, Typography
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { WidthFull } from '@mui/icons-material';


export default function Heading() {
    const [open, setOpen] = React.useState(false);



    return (

        <Stack direction='row' justifyContent='space-between' >
            <Typography>Holdings details</Typography>
            <Stack direction='row' justifyContent='space-between' >
                <Typography>Holdings details</Typography>
                <KeyboardArrowUpIcon sx={{
                    color: "#53A57C"
                }}></KeyboardArrowUpIcon>
                <Typography>+1,54%</Typography>


                <FormControl >

                    <Select
                        sx={{
                            height: 30,
                            padding: 0
                        }}
                    >
                        <MenuItem >1d</MenuItem>
                        <MenuItem >1w</MenuItem>
                        <MenuItem >1m</MenuItem>
                        <MenuItem >6m</MenuItem>
                        <MenuItem >1y</MenuItem>
                    </Select>
                </FormControl>

            </Stack>

        </Stack>

    );
}
