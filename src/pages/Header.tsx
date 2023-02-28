import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Button, Container } from '@mui/material';
import Image from 'next/image';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 15,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '80%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {

        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        paddingRight: `calc(0.75em)`,
        transition: theme.transitions.create('width'),
        width: 'full',
        [theme.breakpoints.up('md')]: {

        },
    },
}));

export default function PrimarySearchAppBar() {
    React.useState<null | HTMLElement>(null);

    return (
        <>
            <Box display="flex" justifyContent="space-around"

            >
                {/* [#ace0e6] [#d8e4e6]*/}
                {/* className='h-60 bg-gradient-to-r from-[#BDD9DD] via-[#e2dff5] to-[#A4D8DD] */}
                {/* <AppBar position="static" className=' bg-gradient-to-r from-[#c7e3e6] via-[#e2dff5] to-[#b2e4e9]
            shadow-2xl shadow-[#499EB6] md:shadow-2xl md:shadow-[#A4D8DD]  ' > */}
                <AppBar position="static" className=' bg-gradient-to-r from-[#BDD9DD] via-[#e2dff5] to-[#b2e4e9]
            shadow-2xl shadow-[#499EB6] md:shadow-2xl md:shadow-[#A4D8DD] appearance-none ' >

                    <Toolbar>
                        <Box className='rotate-[-7.12deg] mt-[50px] bg-[#FFDEA7] mb-[50px]
                         h-[53px] w-[128px] text-center mr-[-5px]'>
                            <Typography
                                variant='h3'
                                gutterBottom
                                component='div'
                                className='text-60px font-normal text-[#000000]
                                     font-[Libre Baskerville] sticky rotate-[7.12deg] cursor-pointer '
                            >
                                treas
                            </Typography>
                        </Box>
                        <Box width={600}>
                            <Search sx={{ height: "40px" }} className='flex
                            appearance-none rounded-[15px] bg-[#ffffff38] '>
                                <SearchIconWrapper className=' appearance-none'>
                                    <Image src="image/image 118.svg" alt='' width={20} height={20} />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    sx={{ color: "#3B3A40", fontWeight: "700" }}
                                    placeholder="Scan any treas ETH wallet address or ENS name"
                                    inputProps={{ 'aria-label': 'search' }}
                                    fullWidth

                                />
                                <Image src="image/image 131.svg" alt="" width={30} height={30} className="cursor-pointer mr-[15px]" />
                            </Search>
                        </Box>
                        <Box />
                        <Box display="flex">


                            <Button sx={{
                                fontSize: "16px",
                                color: "#000000", borderColor: "#8E8C95",
                                borderBlockColor: "#8E8C95", borderRadius: "rounded", marginRight: "10px",
                                fontWeight: "700"
                            }}
                            >Learn</Button>



                            <Button sx={{
                                fontSize: "16px",
                                color: "#000000", borderColor: "#8E8C95",
                                borderBlockColor: "#8E8C95", borderRadius: "rounded", marginRight: "10px",
                                fontWeight: "700"

                            }}
                                className='text-[#000000] 
                                text-[16px] font-bold  border-[#8E8C95] mr-[10px] '
                            >Solutions</Button>



                            <Button sx={{
                                fontSize: "16px", backgroundColor: "white",
                                color: "#000000", borderColor: "#8E8C95", borderStyle: "solid",
                                borderBlockColor: "#8E8C95]", borderRadius: "rounded", marginRight: "10px",
                                paddingX: "15px", fontWeight: "700"
                            }}
                            >Access Treas</Button>


                        </Box>

                    </Toolbar >


                </AppBar >
                {/* <Typography sx={{ border: "none" }} width="100%"
                    className=' bg-gradient-to-r from-[#c7e3e6] via-[#e2dff5] to-[#b2e4e9]
         shadow-2xl shadow-[#c7e6e6] md:shadow-2xl md:shadow-[#499EB6] blur appearance-none'>
                </Typography> */}
            </Box>
            <Typography sx={{ border: "none" }} width="100%"
                className='h-10 bg-gradient-to-r from-[#c7e3e6] via-[#e2dff5] to-[#b2e4e9]
         shadow-2xl shadow-[#c7e6e6] md:shadow-2xl md:shadow-[#499EB6] blur appearance-none'>

            </Typography>


        </>
    );
}