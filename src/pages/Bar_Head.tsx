import { Box, Button, Container, FormControl, IconButton, Menu, MenuItem, Modal, Select, SelectChangeEvent, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import * as React from 'react';
import Image from 'next/image';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { RoundedCorner } from '@mui/icons-material';



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 595,
    bgcolor: 'background.paper',
    border: "1px solid #979797",
    pt: 2,
    px: 4,
    pb: 3,
};


const commonStyles = {
    m: 1,
    border: 1,

};

export default function NFT_Head() {

    const [opendate, setOpendate] = React.useState(false);
    const [opennft, setNft] = React.useState(false);
    const [openhistory, setHistory] = React.useState(false);
    const handleOpen = () => {
        setOpendate(true);
        setNft(true);
        setHistory(true);
    };



    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {

        setAnchorEl(null);
        setOpendate(false);
        setNft(false)
        setHistory(false)

    };

    return (
        <React.Fragment>

            <Box display="flex" justifyContent="space-between" borderBottom="solid" borderColor='#D1D0D6' marginTop="50px" marginBottom="38px" >
                <Box display="flex" justifyContent="space-evenly" >

                    <Box > <Typography className='  ml-[20px] p-[10px] text-[25px]'>treasury </Typography></Box>
                    <Box sx={{ ...commonStyles, borderColor: '#D1D0D6' }} display="flex" alignItems="center"
                        height={40} width={200} onClick={handleOpen}>
                        <Typography className=' ml-[20px] p-[10px]  text-[12px]
                     font-semibold text-center'  >JUL. <br /> 2022 </Typography> <EastIcon />

                        <Typography className=' ml-[20px] p-[10px] text-[12px] text-center
                     font-semibold'  >MAR.<br /> 2023   </Typography> <KeyboardArrowDownIcon className='pr-[5px]' />
                    </Box>
                    <Modal
                        open={opendate}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{ ...style, width: 500, height: 400 }}>
                            <Box borderRadius="100px" borderColor="#979797" border="1px"
                                position="absolute" color="#FFFFFF" marginTop="-20px">
                                <Image src="image/back icon.svg" alt="Fund me" width={30} height={30} onClick={handleClose}
                                />
                            </Box>
                            <Box marginLeft={10}>
                                <Box sx={{ ...commonStyles, borderColor: '#D1D0D6' }} display="flex" alignItems="center"
                                    height={40} width={200} onClick={handleOpen}>

                                    <Typography className=' ml-[20px] p-[10px]  text-[12px]
                     font-semibold text-center'  >JUL. <br /> 2022 </Typography> <EastIcon />

                                    <Typography className=' ml-[20px] p-[10px] text-[12px] text-center
                     font-semibold'  >MAR.<br /> 2023   </Typography> <KeyboardArrowDownIcon className='pr-[5px]' />
                                </Box>
                            </Box>
                            <Typography className='text-[30px] pt-[45px] pl-[45px] '>
                                Your treas over time
                            </Typography>
                            <Typography className='text-[20px] pt-[12px] pl-[45px] text-[#64626A]'>
                                Scan any ETH treas
                            </Typography>

                            <Typography className='text-[20px] pl-[45px] text-[#64626A]'>
                                If you want to scan other blockchains, add and manage multiple wallets create your account for free.
                            </Typography>

                            <Typography className='text-[18px] pl-[45px] pt-[20px] text-[#FF6846]'>
                                Create your treas
                                <KeyboardArrowRightIcon className='text-[#FF6846]' onClick={handleClose} />
                            </Typography>


                        </Box>
                    </Modal>

                    <Box onClick={handleOpen}><Typography className='  ml-[20px] p-[10px] text-[#979797] text-[20px]'> NFTs
                    </Typography></Box>

                    <Modal
                        open={opennft}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{ ...style, width: 500, height: 400 }}>
                            <Box borderRadius="4px" borderColor="#979797" border="1px" marginLeft={55}
                                position="absolute" padding={0} marginTop={0}>
                                <Image src="image/back icon.svg" alt="Fund me" width={30} height={30} onClick={handleClose} />
                            </Box>
                            <Box marginLeft={20}>
                                <Image src="image/NFT.svg" alt="Fund me" width={90} height={90} />
                            </Box>
                            <Typography className='text-[30px] pt-[45px] pl-[45px] '>
                                Count on your NFTs
                            </Typography>
                            <Typography className='text-[20px] pt-[12px] pl-[45px] text-[#64626A]'>
                                Scan any ETH treas
                            </Typography>

                            <Typography className='text-[20px] pl-[45px] text-[#64626A]'>
                                If you want to scan other blockchains, add and manage multiple wallets create your account for free.
                            </Typography>

                            <Typography className='text-[18px] pl-[45px] pt-[20px] text-[#FF6846]'>
                                Create your treas
                                <KeyboardArrowRightIcon className='text-[#FF6846]' onClick={handleClose} />
                            </Typography>


                        </Box>
                    </Modal>


                    <Box onClick={handleOpen}><Typography className='   ml-[20px] p-[10px] text-[#979797] text-[20px]'> History </Typography></Box>
                </Box>

                <Modal
                    open={openhistory}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 500, height: 400 }}>
                        <Box borderRadius="4px" borderColor="#979797" border="1px" marginLeft={55}
                            position="absolute" padding={0} marginTop={0}>
                            <Image src="image/back icon.svg" alt="Fund me" width={30} height={30} onClick={handleClose} />
                        </Box>
                        <Box marginLeft={20}>
                            <Image src="image/IIcon.svg" alt="Fund me" width={90} height={90} />
                        </Box>
                        <Typography className='text-[30px] pt-[45px] pl-[45px] '>
                            All transactions, Easy
                        </Typography>
                        <Typography className='text-[20px] pt-[12px] pl-[45px] text-[#64626A]'>
                            Scan any ETH treas
                        </Typography>

                        <Typography className='text-[20px] pl-[45px] text-[#64626A]'>
                            If you want to scan other blockchains, add and manage multiple wallets create your account for free.
                        </Typography>

                        <Typography className='text-[18px] pl-[45px] pt-[20px] text-[#FF6846]'>
                            Create your treas
                            <KeyboardArrowRightIcon className='text-[#FF6846]' onClick={handleClose} />
                        </Typography>


                    </Box>
                </Modal>


                <Box display="flex" justifyContent="space-around" alignItems="center">
                    <ShareOutlinedIcon className='mr-[20px]' />

                    <FormControl sx={{ minWidth: 5 }} className="flex justify-between p-[0px]  border border-none">


                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <SettingsOutlinedIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}


                        >

                            <MenuItem value={20} className="text-[12px] flex justify-evenly font-bold " onClick={handleClose}>
                                <Image src="image/flags/usd.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[30px] pl-[10px]'> USD </Typography>
                                <Image src="image/flags/cny.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[10px] pl-[10px]'> CNY </Typography>
                            </MenuItem>
                            <MenuItem value={20} className="text-[12px] flex justify-between font-bold" onClick={handleClose}>
                                <Image src="image/flags/cad.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[30px] pl-[10px]'> CAD </Typography>
                                <Image src="image/flags/jpy.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[10px] pl-[10px]'> JPY </Typography>
                            </MenuItem>
                            <MenuItem value={40} className="text-[12px] flex justify-between " onClick={handleClose}>
                                <Image src="image/flags/mxn.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[30px] pl-[10px]'> MXN </Typography>
                                <Image src="image/flags/krw.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[10px] pl-[10px]'> KRW </Typography>
                            </MenuItem>

                            <MenuItem value={50} className="text-[12px] flex justify-between " onClick={handleClose}>
                                <Image src="image/flags/brl.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[30px] pl-[10px]'> BRL </Typography>
                                <Image src="image/flags/hkd.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[10px] pl-[10px]'> HKD </Typography>
                            </MenuItem>
                            <MenuItem value={60} className="text-[12px] flex justify-between " onClick={handleClose}>
                                <Image src="image/flags/aud.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[30px] pl-[10px]'> AUD </Typography>
                                <Image src="image/flags/sgd.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[10px] pl-[10px]'> SGD </Typography>
                            </MenuItem>
                            <MenuItem value={70} className="text-[12px] flex justify-between " onClick={handleClose}>
                                <Image src="image/flags/eur.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[30px] pl-[10px]'> EUR </Typography>
                                <Image src="image/flags/inr.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[10px] pl-[10px]'> INR </Typography>
                            </MenuItem>
                            <MenuItem value={80} className="text-[12px] flex justify-between " onClick={handleClose}>
                                <Image src="image/flags/gbp.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[30px] pl-[10px]'> GBP </Typography>
                                <Image src="image/flags/rub.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[10px] pl-[10px]'> RUB </Typography>
                            </MenuItem>
                            <MenuItem value={90} className="text-[12px] flex justify-between " onClick={handleClose}>
                                <Image src="image/flags/chf.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[30px] pl-[10px]'> CHF </Typography>
                                <Image src="image/flags/try.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[10px] pl-[10px]'> TRY </Typography>
                            </MenuItem>
                            <MenuItem value={99} className="text-[12px] flex justify-between " onClick={handleClose}>
                                <Image src="image/flags/sek.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[30px] pl-[10px]'> SEK </Typography>
                                <Image src="image/flags/eth.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[10px] pl-[10px]'> ETH </Typography>
                            </MenuItem>
                            <MenuItem value={99} className="text-[12px] flex justify-between " onClick={handleClose}>
                                <Image src="image/flags/nok.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[30px] pl-[10px]'> NOK </Typography>
                                <Image src="image/flags/btc.svg" alt="fun me" width={20} height={20} />
                                <Typography className='text-[12px] font-bold mr-[10px] pl-[10px]'> BTC </Typography>
                            </MenuItem>
                        </Menu>
                    </FormControl>
                </Box>
            </Box>

        </React.Fragment>
    );
}
