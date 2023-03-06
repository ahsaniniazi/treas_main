import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Button, Container } from '@mui/material';
import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react'

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
    const [navbar, setNavbar] = useState(false);
    return (
        <>
            <Box display="flex" justifyContent="space-between" borderBottom="none">
                {/* [#ace0e6] [#d8e4e6]*/}
                {/* className='h-60 bg-gradient-to-r from-[#BDD9DD] via-[#e2dff5] to-[#A4D8DD] */}
                <AppBar position="static" className=' bg-gradient-to-r from-[#BDD9DD] via-[#e2dff5] to-[#b2e4e9]
            shadow-2xl shadow-[#499EB6] md:shadow-2xl md:shadow-[#A4D8DD] appearance-none  ' >
                    <Container className="pl-[0px] pr-[0px] max-xs:pl-[12px]">
                        <Toolbar className=''>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box display={'flex'} alignItems={'center'}
                                    flexDirection={{ xs: 'column', md: 'row', lg: 'row' }}
                                >
                                    <Box className='flex rotate-[-6.12deg] mt-[50px] bg-[#FFDEA7] mb-[50px]
                                        h-[38px] w-[105px] '
                                        alignSelf={{ xs: 'start' }}
                                    >
                                        <Typography
                                            variant='h3'
                                            gutterBottom
                                            component='div'
                                            className='text-60px font-normal text-[#000000] font-[Libre Baskerville] mt-[-12px] rotate-[7.12deg]
                                            '
                                        >
                                            treas
                                        </Typography>
                                    </Box>
                                    <div className="md:hidden absolute right-[10px] top-[40px]">
                                        <button
                                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                            onClick={() => setNavbar(!navbar)}
                                        >
                                            {navbar ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 text-black"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 text-black"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4 6h16M4 12h16M4 18h16"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                    <Box width={600}>
                                        <Search sx={{ height: "40px" }} className='flex
                                            appearance-none rounded-[15px] bg-[#ffffff38]  max-xs:w-[280px]'>
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
                                </Box>
                                <Box />

                                {/* <div aria-orientation='vertical' className={`flex flex-col justify-self-center pb-3 mt-12 w-[100vw] h-[100vh] overflow-y-scroll
                                     bg-[#000000] z-1000 
                                    md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                    }`}>

                                    <h1>sadasdasdsadjljlkj</h1>

                                </div> */}

                                <div className={`justify-center ${navbar ? 'block' : 'hidden'}`}>

                                    <div
                                        className='w-[100vw] h-[100vh] overflow-y-scroll
                                        flex flex-col top-[100px]
                                        px-2 py-2 pb-[3rem]
                                        fixed left-0 z-1000 '
                                        
                                        aria-orientation='vertical'
                                        style={{
                                            background: "#dcf3f7",
                                            zIndex: 100,
                                            // width: "375px",
                                        }}
                                        tabIndex={-1}
                                    >
                                        <Button className='text-[#000000] 
                                text-[14px] font-bold  border-[#8E8C95]'
                                    >Learn</Button>



                                    <Button className='text-[#000000] 
                                text-[14px] font-bold  border-[#8E8C95]'
                                    >Solutions</Button>



                                    <Button className='text-[#000000] 
                                text-[14px] font-bold bg-transparent border-[#8E8C95] border-2 border-solid
                                rounded  opacity-[0.48]'
                                    >Access Treas</Button>
                                    </div>
                                </div>


                                <Box display={{ xs: 'none', md: "flex", lg: 'flex' }}
                                    flexDirection={{ xs: 'column', md: 'row', lg: 'row' }}
                                    marginLeft={10}
                                >


                                    <Button className='text-[#000000] 
                                text-[14px] font-bold  border-[#8E8C95] mr-[10px] '
                                    >Learn</Button>



                                    <Button className='text-[#000000] 
                                text-[14px] font-bold  border-[#8E8C95] mr-[10px] '
                                    >Solutions</Button>



                                    <Button className='text-[#000000] 
                                text-[14px] font-bold bg-[#FFFFFF] border-[#8E8C95] border-2 border-solid
                                rounded  opacity-[0.48]'
                                    >Access Treas</Button>


                                </Box>
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




const NavItem: React.FC<{ text: string; href?: any, active?: any }> = ({ text, href, active }) => {
    return (
        <Link href={href}>
            <a
                className={`nav__item ${active ? "active" : ""
                    }`}
            >
                {text}
            </a>
        </Link>
    );
};

// export default NavItem;