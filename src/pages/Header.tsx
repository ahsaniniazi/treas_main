import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, Container, Modal } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from 'react'


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 595,
    bgcolor: 'background.paper',
    border: "border-solid border-1 #979797",
    pt: 2,
    px: 4,
    pb: 3,
};


const commonStyles = {
    m: 1,
    border: 1,

};

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
    const [opensearch, setSearch] = React.useState(false);

    const handleOpenSearch = () => {
        setSearch(true);
    };

    const handleClose = () => {


        setSearch(false);


    };
    const [navbar, setNavbar] = useState(false);
    return (
        <>
            <Box display="flex" justifyContent="space-between" borderBottom="none">

                <AppBar position="static" className=' bg-gradient-to-r from-[#BDD9DD] via-[#e2dff5] to-[#b2e4e9]
            shadow-2xl shadow-[#499EB6] md:shadow-2xl md:shadow-[#A4D8DD] appearance-none  ' >
                    <Container className="pl-[0px] pr-[0px] max-xs:pl-[12px]">
                        <Toolbar className=''>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box display={'flex'} alignItems={'center'}
                                    flexDirection={{ xs: 'column', md: 'row', lg: 'row' }}
                                >
                                    <Box sx={{
                                        display: "flex", rotate: "-6.12deg",
                                        marginTop: "50px",
                                        backgroundColor: "#FFDEA7",
                                        marginBottom: "50px",
                                        width: "107px",
                                        height: "38px"
                                    }}
                                        alignSelf={{ xs: 'start' }}
                                    >
                                        <Typography sx={{
                                            fontSize: { xs: "40px", md: "60px" }, fontWeight: "400", color: "#000000",
                                            fontFamily: "Libre Baskerville", marginTop: "-22px", rotate: "7.12deg"
                                        }}
                                            variant='h3'
                                            gutterBottom
                                            component='div'

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
                                        <Search sx={{
                                            height: "40px", display: "flex", appearance: "none",
                                            borderRadius: "15px", backgroundColor: "#ffffff38"
                                        }} className='max-xs:w-[280px]'>
                                            <SearchIconWrapper>
                                                <Image src="image/image 118.svg" alt='' width={16} height={16} />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                sx={{ color: "#3B3A40", fontStyle: "bold" }}
                                                placeholder="Scan any treas ETH wallet address or ENS name"
                                                inputProps={{ 'aria-label': 'search' }}
                                                fullWidth

                                            />
                                            <Image src="image/image 131.svg" alt="" width={25} height={25}
                                                className="cursor-pointer mr-[15px]" onClick={handleOpenSearch} />
                                        </Search>
                                        <Modal
                                            open={opensearch}
                                            onClose={handleClose}
                                            aria-labelledby="parent-modal-title"
                                            aria-describedby="parent-modal-description"
                                            className='bg-[#ffffffe6]'

                                        >
                                            <Box sx={{
                                                ...style,
                                                width: { xs: 280, md: 700 },
                                                height: { xs: 350, md: 500 }
                                            }} borderColor="#979797">
                                                <Box border="1px"
                                                    position="absolute" top="-22px" right="-20px" >
                                                    <Image src="image/back icon.svg" alt="Fund me" width={40}
                                                        height={40} onClick={handleClose}
                                                        className="bg-[#fff] border rounded-full
                                                         relative border-[#979797] px-[5px] py-[5px] cursor-pointer" />
                                                </Box>
                                                <Box marginLeft={{ xs: 0, md: 20 }}
                                                    marginBottom={{ xs: 0, md: 5 }}
                                                    marginTop={5}>
                                                    <Box sx={{
                                                        ...commonStyles, borderColor: '#D1D0D6',
                                                        borderRadius: "10px"
                                                    }} display="flex" alignItems="center"
                                                        height={40}
                                                        width={{ xs: 200, md: 230 }} >

                                                        <SearchIconWrapper >
                                                            <Image src="image/image 118.svg" alt='fund me' width={15} height={15} />
                                                        </SearchIconWrapper>
                                                        <StyledInputBase
                                                            placeholder="Search"
                                                            inputProps={{ 'aria-label': 'search' }}
                                                            className='text-[#979797] font-medium '
                                                            fullWidth

                                                        />
                                                    </Box>
                                                </Box>
                                                <Typography sx={{
                                                    fontSize: { xs: "16px", md: "30px" },
                                                    paddingTop: { xs: "45px", md: "45px" },
                                                    paddingLeft: { xs: "0px", md: "45px" },
                                                    fontFamily: "Libre Baskerville",
                                                    color: "#000000"

                                                }}

                                                >
                                                    Search your treas
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: { xs: "12px", md: "20px" },
                                                    paddingTop: { xs: "45px", md: "45px" },
                                                    paddingLeft: { xs: "0px", md: "45px" },
                                                    fontFamily: "Libre Baskerville",
                                                    color: "#64626A"
                                                }}
                                                >
                                                    Scan any ETH treas
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: "12px", md: "20px" },
                                                        paddingTop: { xs: "45px", md: "45px" },
                                                        paddingLeft: { xs: "0px", md: "45px" },
                                                        fontFamily: "Libre Baskerville",
                                                        color: "#64626A"
                                                    }}
                                                >
                                                    If you want to scan other blockchains, add and manage multiple wallets create your account for free.
                                                </Typography>

                                                <Typography sx={{
                                                    fontSize: { xs: "12px", md: "18px" },
                                                    paddingTop: { xs: "20px", md: "20px" },
                                                    paddingLeft: { xs: "0px", md: "45px" },
                                                    fontFamily: "Libre Baskerville",
                                                    color: "#FF6846",
                                                    cursor: "pointer"

                                                }}
                                                >
                                                    Create your treas
                                                    <KeyboardArrowRightIcon sx={{
                                                        color: "#FF6846",
                                                        cursor: "pointer"
                                                    }}
                                                        onClick={handleClose} />
                                                </Typography>


                                            </Box>
                                        </Modal>
                                    </Box>
                                </Box>
                                <Box />

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
                                        }}
                                        tabIndex={-1}
                                    >
                                        <Button sx={{
                                            color: "#000000",
                                            fontSize: "14px",
                                            fontWeight: "700",
                                            borderColor: "#8E8C95"
                                        }}

                                        >Learn</Button>



                                        <Button sx={{
                                            color: "#000000",
                                            fontSize: "14px",
                                            fontStyle: "bold",
                                            fontWeight: "700",
                                            borderColor: "#8E8C95"
                                        }}
                                        >Solutions</Button>



                                        <Button sx={{
                                            color: "#000000",
                                            fontSize: "14px",
                                            fontWeight: "700",
                                            background: "transparent",
                                            borderWidth: "2px",
                                            borderStyle: "solid",
                                            borderRadius: "5px",
                                            borderColor: "#8E8C95",
                                            opacity: "0.48"
                                        }}
                                        >Access Treas</Button>
                                    </div>
                                </div>


                                <Box display={{ xs: 'none', md: "flex", lg: 'flex' }}
                                    flexDirection={{ xs: 'column', md: 'row', lg: 'row' }}
                                    marginLeft="70px"
                                >


                                    <Button sx={{
                                        color: "#000000",
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        borderColor: "#8E8C95",
                                        marginRight: "10px"
                                    }}
                                    >Learn</Button>



                                    <Button sx={{
                                        color: "#000000",
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        borderColor: "#8E8C95",
                                        marginRight: "10px"
                                    }}
                                    >Solutions</Button>



                                    <Button sx={{
                                        color: "#000000",
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        background: "transparent",
                                        borderWidth: "2px",
                                        borderStyle: "solid",
                                        borderRadius: "5px",
                                        borderColor: "#8E8C95",
                                        opacity: "0.48"
                                    }}
                                    >Access Treas</Button>


                                </Box>
                            </Box>
                        </Toolbar >
                    </Container >
                </AppBar >

            </Box >
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