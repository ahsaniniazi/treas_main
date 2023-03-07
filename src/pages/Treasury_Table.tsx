import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import * as React from 'react';

function createData(
    color: string,
    background: string,
    Network: string,
    JUL: string,
    AUG: string,
    SEPT: string,
    OCT: string,
    NOV: string,
    DEC: string,
    JAN: string,
    FEB: string,
    MAR: string,

) {
    return { color, background, Network, JUL, AUG, SEPT, OCT, NOV, DEC, JAN, FEB, MAR };
}

const rows = [

    createData(
        "#000", "#F5F6F9", "treas beg. of the month", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#53A57C", "#F5F6F9", "Inflows", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#ffffff", "", "", '', "", "Unlock your treasury with labels", "", "",
        "", "", "Know more about label", ">"),
    createData("#FF6846", "#F5F6F9", "OutFlows", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#000", "#F5F6F9", "treas end of the month", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#979797", "#F5F6F9", "Total Fees", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#FFBA69", "", "Key indicators", '', "", "", "", "",
        "", "", "", ""),
    createData("", "", "Total Transactions", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("", "", "Total Contacts", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#ffffff", "", "", '', "", "Define your own KPIs and supercharge your treasury", "", "",
        "", "", "", ""),

]
export default function DenseTable() {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <Box overflow={'scroll'} className='scrollStyle'>
            <Table sx={{
                minWidth: 650, overflowX: { xs: 'scroll', md: 'hidden', lg: 'hidden' },
                overflowY: { xs: 'hidden', md: 'hidden', lg: 'hidden' }
            }}
                size="small" aria-label="a dense table">
                <TableHead >
                    <TableRow sx={{ lineHeight: 8, display: "flex" }}
                    >
                        <TableCell className='pl-[0px] pr-[30px] text-[#D1D0D6] border-0 '>

                            <FormControl className=" 
                         border-solid border-[#D3D3D3] rounded-md w-[270px]">
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}



                                >
                                    <MenuItem value="" >
                                        <Box display="flex" flexDirection="row">
                                            <Image src="image/image 117.svg" alt='' width={24} height={24} />
                                            <Typography marginLeft="10px"> All Networks </Typography>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem value={10} className="text-[12px] text- flex justify-between ">

                                        <Typography className='text-[14px] font-bold'> All Networks </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={20} className="text-[12px] flex justify-between font-bold">
                                        <Image src="image/currency_icon/Ethereum.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Etehreum </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={20} className="text-[12px] flex justify-between font-bold">
                                        <Image src="image/currency_icon/BSC.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> BSC </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={40} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Moonriver.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Moonriver </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>

                                    <MenuItem value={50} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Polygon.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Polygon </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={60} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Avalanche.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Avalanche </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={70} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Fantom.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Fantom </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={80} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Arbitrum.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Arbitrum </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={90} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Gnosis Chain.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Gnosis Chain </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={99} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Aurora.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'>Aurora</Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                </Select>
                            </FormControl>

                        </TableCell>

                        <TableCell align='center' className='border-y border-solid border-[#000000] '
                            sx={{ marginY: 1, minWidth: 90 }}
                        >JUL. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ marginY: 1, minWidth: 90 }}>AUG. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ marginY: 1, minWidth: 90 }}>SEP. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ marginY: 1, minWidth: 90 }}>OCT. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ marginY: 1, minWidth: 90 }}>NOV. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ marginY: 1, minWidth: 90 }} >DEC. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ marginY: 1, minWidth: 90 }} >JAN. 23</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ marginY: 1, minWidth: 90 }}>FEB. 23</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ marginY: 1, minWidth: 90 }}>MAR. 23</TableCell>


                    </TableRow>

                </TableHead>

                <TableBody className='leading-8' >
                    {rows.map((row, index) => {
                        return index === 2 ?
                            (<Box sx={{
                                display: "flex", justifyContent: "space-evenly",
                                height: "116px", alignItems: "center",
                                width: "1118px"

                            }} className="border-b border-x 
                            border-1px border-[#D3D3D3] rounded-b-md">
                                <Box sx={{
                                    fontSize: "38px", display: 'flex', marginLeft: "60px"
                                }} className='text-[#000000]'>
                                    Unlock your
                                    <Box display="flex" className='text-[#000000] mr-[10px]' >
                                        <Box className='rotate-[-6.12deg]  bg-[#C2EED8] 
                         h-[38px] w-[107px]  ml-[10px] '>
                                            <Typography
                                                variant='h3'
                                                gutterBottom
                                                component='div'
                                                className=' font-normal text-[#000000] 
                                font-[Libre Baskerville] sticky rotate-[6.12deg] mt-[-12px] '
                                            >
                                                treas
                                            </Typography>
                                        </Box>
                                        <Typography variant='h3' className='pl-[2px] mt-[-5px] font-[Libre Baskerville] font-normal text-[#000000] text-[40px]'>
                                            ury </Typography>
                                    </Box> with labels
                                </Box>
                                <Box display="flex" justifyContent="center" marginLeft={20}  >
                                    <Typography className='text-[15px] text-[#FF6846] cursor-pointer'>
                                        Know more about label
                                        <KeyboardArrowRightIcon className="cursor-pointer" />
                                    </Typography>
                                </Box>
                            </Box>)

                            : index === 9 ? (<Box sx={{
                                display: "flex", justifyContent: "space-evenly",
                                height: "38px", alignItems: "center",
                                width: "1118px"

                            }} className="border-b border-x 
                             border-1px border-[#D3D3D3] rounded-b-md" >

                                <Box sx={{ fontSize: "15PX", display: "flex" }}>
                                    Define your own KPIs and supercharge your
                                    <Box className='rotate-[-6.12deg]  bg-[#C2EED8] 
                    h-[18px] w-[35px] mt-[10px] ml-[5px] max-xs:h-[10px] max-xs:w-[26px]'>
                                        <Typography
                                            variant='h3'
                                            gutterBottom
                                            component='div'
                                            className='text-[15px] font-normal text-[#000000] 
                            font-[Libre Baskerville] sticky rotate-[6.12deg] mt-[-2px] 
                            max-xs:text-[12px] max-xs:mt-[-3px]'
                                        >
                                            treas
                                        </Typography>
                                    </Box>
                                    <Typography marginTop="6px">

                                        ury
                                    </Typography>
                                </Box>

                            </Box>)
                                :
                                (
                                    <TableRow sx={{
                                        display: "flex", ' &:nth-child(7) td': { border: 0 }
                                        , ' &:nth-child(7) td:first-child':
                                        {
                                            border: 1, borderColor: "#D3D3D3",
                                            backgroundColor: "#F5F6F9", marginBottom: "-12px",

                                        },
                                        ' &:nth-child(10) td': {
                                            borderTop: 0, marginTop: "0px", height: "38px",
                                            paddingTop: "10px"
                                        }
                                        , ' &:nth-child(10) td:first-child': {
                                            borderRight: 0, borderColor: "#D3D3D3",
                                            backgroundColor: "#FFFFFF",
                                            width: "290px",
                                        },
                                        ' &:nth-child(10) td:nth-child(2)': {
                                            borderLeft: 0,

                                        },
                                        ' &:nth-child(10) th:nth-child(4)': {
                                            borderLeft: 0,
                                            fontSize: "38px",
                                            columnSpan: "2"

                                        }
                                        ,
                                        ' &:nth-child(10) td:nth-child(7)': {
                                            borderRight: 0,
                                        }
                                        ,
                                        ' &:nth-child(10) td:nth-child(8)': {
                                            borderLeft: 0,
                                            marginLeft: "-230px"
                                        },
                                        ' &:nth-child(3) td': {
                                            borderTop: 0, marginTop: "0px", height: "116px",
                                        }
                                        , ' &:nth-child(3) td:first-child': {
                                            borderRight: 0, borderColor: "#D3D3D3",
                                            backgroundColor: "#FFFFFF",
                                            width: "290px",
                                            marginRight: "10px",

                                        },
                                        ' &:nth-child(3) td:nth-child(2)': {
                                            borderLeft: 0,
                                        }
                                        ,
                                        ' &:nth-child(3) td:nth-child(7)': {
                                            borderRight: 0,

                                        }
                                        ,
                                        ' &:nth-child(3) th:nth-child(4)': {
                                            borderLeft: 0,
                                            fontSize: "38px",
                                            columnSpan: "2"

                                        }
                                        ,
                                        ' &:nth-child(3) td:nth-child(8)': {
                                            borderLeft: 0,

                                        }


                                    }}
                                        key={row.JUL}
                                    >


                                        <TableCell align='center' className='flex border-x border-y 
                                    border-solid border-[#D1D0D6] rounded-md text-left text-[14px] text-[#000]
                                     font-semibold mt-[10px]  w-[290px] mr-[10px]   '
                                            sx={{ background: row.background }} >

                                            <Box sx={{ width: "22px", height: "22px", borderRadius: "5px" }} bgcolor={row.color}
                                                marginRight="18px" >
                                            </Box>
                                            {row.Network}


                                        </TableCell>

                                        <TableCell align='center' className=' border-l border-y 
                                    border-solid border-[#D3D3D3] rounded-l-md text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{ background: row.background, minWidth: 90 }}>


                                            {row.JUL}

                                        </TableCell>

                                        <TableCell align='center' className=' border-y 
                                    border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{ background: row.background, minWidth: 90 }}>


                                            {row.AUG}

                                        </TableCell>
                                        <TableCell align='center' className=' border-y 
                                    border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{ background: row.background, minWidth: 90 }}>


                                            {row.SEPT}

                                        </TableCell>

                                        <TableCell align='center' className=' border-y 
                                    border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                                     font-light mt-[10px] '
                                            sx={{ background: row.background, minWidth: 90 }}>

                                            {row.OCT}

                                        </TableCell>
                                        <TableCell align='center' className=' border-y 
                                    border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{ background: row.background, minWidth: 90 }}>


                                            {row.NOV}

                                        </TableCell>
                                        <TableCell align='center' className=' border-r border-y 
                                    border-solid border-[#D3D3D3] rounded-r-md 
                                      text-center text-[12px] text-[#000]
                                     font-light mt-[10px] mr-[8px] 
                                     
                                     '
                                            sx={{
                                                background: row.background, minWidth: 90

                                            }}>



                                            {row.DEC}


                                        </TableCell>

                                        <TableCell align='center' className='border-l border-y 
                                    border-solid border-[#D3D3D3] rounded-l-md text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{
                                                background: row.background, minWidth: 90

                                            }}>


                                            {row.JAN}

                                        </TableCell>
                                        <TableCell align='center' className=' border-y 
                                    border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{ background: row.background, minWidth: 90 }}>


                                            {row.FEB}

                                        </TableCell>
                                        <TableCell align='center' className='border-r border-y 
                                    border-solid border-[#D3D3D3] rounded-r-md text-center text-[12px] text-[#000]
                                     font-light mt-[10px] '
                                            sx={{
                                                background: row.background, minWidth: 90

                                            }}>


                                            {row.MAR}

                                        </TableCell>
                                    </TableRow>)


                    })}
                </TableBody>
            </Table >
        </Box>
    );
}