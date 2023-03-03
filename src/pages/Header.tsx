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
            <Box display="flex" justifyContent="space-around" borderBottom="none"

            >
                {/* [#ace0e6] [#d8e4e6]*/}
                {/* className='h-60 bg-gradient-to-r from-[#BDD9DD] via-[#e2dff5] to-[#A4D8DD] */}
                <AppBar position="static" className=' bg-gradient-to-r from-[#BDD9DD] via-[#e2dff5] to-[#b2e4e9]
            shadow-2xl shadow-[#499EB6] md:shadow-2xl md:shadow-[#A4D8DD] appearance-none  ' >
                    <Container className="pl-[0px] pr-[0px]">
                        <Toolbar className=''>
                            <Box className='rotate-[-6.12deg] mt-[50px] bg-[#FFDEA7] mb-[50px]
                         h-[38px] w-[105px] '>
                                <Typography
                                    variant='h3'
                                    gutterBottom
                                    component='div'
                                    className='text-60px font-normal text-[#000000] font-[Libre Baskerville] mt-[-12px] rotate-[7.12deg]'
                                >
                                    treas
                                </Typography>
                            </Box>
                            <Box width={600}>
                                <Search sx={{ height: "40px" }} className='flex
                            appearance-none rounded-[15px] bg-[#ffffff38]  '>
                                    <SearchIconWrapper>
                                        <Image src="image/image 118.svg" alt='' width={16} height={16} />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Scan any treas ETH wallet address or ENS name"
                                        inputProps={{ 'aria-label': 'search' }}
                                        className='text-[#3B3A40] font-bold '
                                        fullWidth

                                    />
                                    <Image src="image/image 131.svg" alt="" width={25} height={25} className="cursor-pointer mr-[15px]" />
                                </Search>
                            </Box>
                            <Box />
                            <Box display="flex" marginLeft={10}>


                                <Button className='text-[#000000] 
                                text-[14px] font-bold  border-[#8E8C95] mr-[10px] '
                                >Learn</Button>



                                <Button className='text-[#000000] 
                                text-[14px] font-bold  border-[#8E8C95] mr-[10px] '
                                >Solutions</Button>



                                <Button className='text-[#000000] 
                                text-[14px] font-bold bg-[#FFFFFF] border-[#8E8C95] border-2 border-solid
                                rounded  mr-[20px] opacity-[0.48]'
                                >Access Treas</Button>


                            </Box>

                        </Toolbar >
                    </Container >
                </AppBar >

            </Box>
            <Typography sx={{ border: "none", marginTop: "-16px" }} width="100%"
                className='h-10 bg-gradient-to-r from-[#c7e3e6] via-[#e2dff5] to-[#b2e4e9]
         shadow-2xl shadow-[#c7e6e6] md:shadow-2xl md:shadow-[#499EB6] blur appearance-none' >

            </Typography>

        </>
    );
}