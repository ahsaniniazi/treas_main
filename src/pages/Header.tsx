import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, Container, Modal } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';


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

    return (
        <>
            <Box display="flex" justifyContent="space-around" borderBottom="none"

            >

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
                                    <Image src="image/image 131.svg"
                                        alt="" width={25} height={25} className="cursor-pointer mr-[15px]"
                                        onClick={handleOpenSearch} />
                                    <Modal
                                        open={opensearch}
                                        onClose={handleClose}
                                        aria-labelledby="parent-modal-title"
                                        aria-describedby="parent-modal-description"
                                        className='bg-[#ffffffe6]'

                                    >
                                        <Box sx={{ ...style, width: 700, height: 500, borderColor: "#979797", borderWidth: "1px" }} >
                                            <Box border="1px"
                                                position="absolute" top="-22px" right="-20px" >
                                                <Image src="image/back icon.svg" alt="Fund me" width={40} height={40} onClick={handleClose}
                                                    className="bg-[#fff] border rounded-full relative border-[#979797] px-[5px] py-[5px] cursor-pointer" />
                                            </Box>
                                            <Box marginLeft={20} marginBottom={5} marginTop={5} >
                                                <Box sx={{ ...commonStyles, borderColor: '#D1D0D6', borderRadius: "15px" }} display="flex" alignItems="center"
                                                    height={40} width={230} >

                                                    <SearchIconWrapper >
                                                        <Image src="image/image 118.svg" alt='' width={15} height={15} />
                                                    </SearchIconWrapper>
                                                    <StyledInputBase
                                                        placeholder="Search"
                                                        inputProps={{ 'aria-label': 'search' }}
                                                        className='text-[#979797] font-medium '
                                                        fullWidth

                                                    />
                                                </Box>
                                            </Box>
                                            <Typography className='text-[30px] pt-[45px] pl-[45px] font-[Libre Baskerville] '>
                                                Search your treas
                                            </Typography>
                                            <Typography className='text-[20px] pt-[12px] pl-[45px] text-[#64626A]'>
                                                Scan any ETH treas
                                            </Typography>

                                            <Typography className='text-[20px] pl-[45px] text-[#64626A]'>
                                                If you want to scan other blockchains, add and manage multiple wallets create your account for free.
                                            </Typography>

                                            <Typography className='text-[18px] pl-[45px] pt-[20px] text-[#FF6846] cursor-pointer'>
                                                Create your treas
                                                <KeyboardArrowRightIcon className='text-[#FF6846] cursor-pointer' onClick={handleClose} />
                                            </Typography>


                                        </Box>
                                    </Modal>
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