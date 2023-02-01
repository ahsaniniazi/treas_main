import { Search } from "@mui/icons-material";
import { Box, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
    const [focus, setfocus] = useState<boolean>(false);
    return (
        <>
            <Box className=' bg-gradient-to-r from-[#BDD9DD] via-[#C5BFEE] to-[#A4D8DD]' >
                <nav className=' duration-300 p-0 relative flex  items-center'>
                    <Box component="div" className='mr-auto p-0 ml-auto'>
                        <Box component="div" className='flex items-center justify-center'>
                            <Box component="div" className='logo'>
                                <Link
                                    className='p-[1px] -ml-[27rem] mt-[1rem] text-black textdecoration-nounderline whitespace-nowrap focus:text-black hover:text-black text-6xl font-serif leading-4 absolute -rotate-6 bg-[#FFDEA7] h-[35%] font-size-40px font-weight-bold'
                                    href='#'
                                >
                                    <Typography
                                        variant='h3'
                                        gutterBottom
                                        component='div'
                                        className='rotate-6 -mt-[9px]'
                                    >
                                        treas
                                    </Typography>
                                </Link>
                            </Box>

                            <Box
                                component='form'
                                onClick={() => setfocus(true)}
                                className={`relative rounded-3xl ${focus ? "border-[rgb(6 100 237 / 86%)] border-2 border-solid" : ""
                                    } pl-[30px] bg-transparent h-[50px] top-[30px] -left-[280px] p-[0 4px] flex items-center rounded-md w-[300px]`}
                                role='search'
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <TextField
                                    onFocus={() => setfocus(true)}
                                    className='outline-[none] border-transparent focus:outline-[none] hover:outline-[none] focus:border-transparent hover:border-transparent'
                                    type='search'
                                    placeholder='Scan any treas  ETH wallet address or ENS name'
                                    aria-label='Search'
                                />
                                <Box component="div" className='absolute left-2'>
                                    <Search onClick={() => setfocus(true)} />
                                </Box>
                                <button
                                    className='btn '
                                    type='submit'
                                    onClick={() => setfocus(true)}
                                >
                                    <Image
                                        src='/image/image 131.svg'
                                        alt=''
                                        width={25}
                                        height={25}
                                        style={{ marginBottom: 5 }}
                                        onClick={() => setfocus(true)}
                                    />
                                </button>
                            </Box>
                        </Box>

                        <Box

                            display="flex"
                            id='navbarNavDropdown'
                        >
                            <ul className='navbar-nav ms-auto text-capitalize'>
                                <Typography className='nav-link font-size-18px text-[#000000]'>
                                    Access treas
                                </Typography>
                                <Typography className='nav-link font-size-18px text-[#000000]'>
                                    Access treas
                                </Typography>
                                <Typography className='nav-link font-size-18px text-[#000000]'>
                                    Access treas
                                </Typography>
                            </ul>
                        </Box>
                    </Box>
                </nav>
            </Box>
        </>
    );
};

export default Header;
