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
        <Box overflow={'scroll'} className='scrollStyle' >
            <Table sx={{
                minWidth: 650, overflowX: { xs: 'scroll', md: 'hidden', lg: 'hidden' },
                overflowY: { xs: 'hidden', md: 'hidden', lg: 'hidden' }
            }}
                size="small" aria-label="a dense table">
                <TableHead >
                    <TableRow sx={{ lineHeight: 8, display: "flex" }}
                    >
                        <TableCell sx={{
                            paddingLeft: "0px",
                            paddingRight: "30px",
                            color: "#D1D0D6",
                            border: 0
                        }} >

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
                                    <MenuItem value={10} sx={{ fontSize: "12px", display: "flex", justifyContent: "space-between", fontWeight: "700" }} >

                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }} > All Networks </Typography>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={20} sx={{ fontSize: "12px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
                                        <Image src="image/currency_icon/Ethereum.svg" alt="fun me" width={30} height={30} />
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> Etehreum </Typography>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={20} sx={{ fontSize: "12px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
                                        <Image src="image/currency_icon/BSC.svg" alt="fun me" width={30} height={30} />
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> BSC </Typography>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={40} sx={{ fontSize: "12px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
                                        <Image src="image/currency_icon/Moonriver.svg" alt="fun me" width={30} height={30} />
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> Moonriver </Typography>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> 1223,3 $US </Typography>
                                    </MenuItem>

                                    <MenuItem value={50} sx={{ fontSize: "12px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
                                        <Image src="image/currency_icon/Polygon.svg" alt="fun me" width={30} height={30} />
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> Polygon </Typography>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={60} sx={{ fontSize: "12px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
                                        <Image src="image/currency_icon/Avalanche.svg" alt="fun me" width={30} height={30} />
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> Avalanche </Typography>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={70} sx={{ fontSize: "12px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
                                        <Image src="image/currency_icon/Fantom.svg" alt="fun me" width={30} height={30} />
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> Fantom </Typography>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={80} sx={{ fontSize: "12px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
                                        <Image src="image/currency_icon/Arbitrum.svg" alt="fun me" width={30} height={30} />
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> Arbitrum </Typography>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={90} sx={{ fontSize: "12px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
                                        <Image src="image/currency_icon/Gnosis Chain.svg" alt="fun me" width={30} height={30} />
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> Gnosis Chain </Typography>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={99} sx={{ fontSize: "12px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
                                        <Image src="image/currency_icon/Aurora.svg" alt="fun me" width={30} height={30} />
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>Aurora</Typography>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "700" }}> 1223,3 $US </Typography>
                                    </MenuItem>
                                </Select>
                            </FormControl>

                        </TableCell>

                        <TableCell align='center'
                            sx={{ marginY: 1, minWidth: 95, borderBottom: "1px", borderStyle: "solid", borderColor: "#000000" }}
                        >JUL. 22</TableCell>
                        <TableCell align='center'
                            sx={{ marginY: 1, minWidth: 95, borderBottom: "1px", borderStyle: "solid", borderColor: "#000000" }}
                        >AUG. 22</TableCell>
                        <TableCell align='center'
                            sx={{ marginY: 1, minWidth: 95, borderBottom: "1px", borderStyle: "solid", borderColor: "#000000" }}
                        >SEP. 22</TableCell>
                        <TableCell align='center'
                            sx={{ marginY: 1, minWidth: 95, borderBottom: "1px", borderStyle: "solid", borderColor: "#000000" }}
                        >OCT. 22</TableCell>
                        <TableCell align='center'
                            sx={{ marginY: 1, minWidth: 95, borderBottom: "1px", borderStyle: "solid", borderColor: "#000000" }}
                        >NOV. 22</TableCell>
                        <TableCell align='center'
                            sx={{ marginY: 1, minWidth: 95, borderBottom: "1px", borderStyle: "solid", borderColor: "#000000" }}
                        >DEC. 22</TableCell>
                        <TableCell align='center'
                            sx={{ marginY: 1, minWidth: 95, borderBottom: "1px", borderStyle: "solid", borderColor: "#000000" }}
                        >JAN. 23</TableCell>
                        <TableCell align='center'
                            sx={{ marginY: 1, minWidth: 95, borderBottom: "1px", borderStyle: "solid", borderColor: "#000000" }}
                        >FEB. 23</TableCell>
                        <TableCell align='center'
                            sx={{ marginY: 1, minWidth: 95, borderBottom: "1px", borderStyle: "solid", borderColor: "#000000" }}
                        >MAR. 23</TableCell>


                    </TableRow>

                </TableHead>

                <TableBody className='leading-8' >
                    {rows.map((row, index) => {
                        return index === 2 ?
                            (<Box sx={{
                                display: "flex", justifyContent: "space-evenly",
                                height: "116px", alignItems: "center",
                                marginRight: "6px"



                            }} className="border-b border-x 
                            border-1px border-[#D3D3D3] rounded-b-md">
                                <Box sx={{
                                    fontSize: "38px", display: 'flex', fontWeight: "400", marginLeft: "140px",
                                    fontFamily: "Inter"


                                }} className='text-[#000000]'>
                                    Unlock your
                                    <Box display="flex" className='text-[#000000] mr-[10px]' >
                                        <Box sx={{
                                            rotate: "-6.12deg",
                                            marginLeft: "10px",
                                            backgroundColor: "#C2EED8",
                                            height: "38px",
                                            width: { xs: "85px", md: "75px", lg: "75px" },
                                        }}
                                        >
                                            <Typography sx={{
                                                fontWeight: "400",
                                                color: "#000000",
                                                fontFamily: "Inter",
                                                position: "sticky",
                                                rotate: "6.12deg",
                                                marginTop: "-12px",
                                                fontSize: "38px"


                                            }}

                                                gutterBottom
                                                component='div'

                                            >
                                                treas
                                            </Typography>
                                        </Box>
                                        <Typography variant='h3'
                                            sx={{
                                                paddingBottom: "4px",
                                                marginTop: "-5px",
                                                fontFamily: "Inter",
                                                fontWeight: "400",
                                                color: "#000000",
                                                fontSize: "40px"
                                            }}
                                        >
                                            ury </Typography>
                                    </Box>
                                    <Box marginTop="4px"> with labels </Box>
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
                                marginRight: "6px"

                            }} className="border-b border-x 
                             border-1px border-[#D3D3D3] rounded-b-md" >

                                <Box sx={{ fontSize: "15PX", display: "flex", marginLeft: "170px", fontFamily: "Inter", color: "black" }}>
                                    Define your own KPIs and supercharge your
                                    <Box sx={{
                                        rotate: "-6.12deg",
                                        marginTop: { xs: "-3px", md: "10px" },
                                        marginLeft: "5px",
                                        backgroundColor: "#C2EED8",
                                        height: { xs: "10px", md: "18px" },
                                        width: { xs: "26px", md: "38px" },

                                    }}

                                    >
                                        <Typography sx={{
                                            fontSize: { xs: "12px", md: "19px" },
                                            fontWeight: "400",
                                            color: "#000000",
                                            fontFamily: "Libre Baskerville",
                                            position: "sticky",
                                            rotate: "7.12deg",
                                            marginTop: { xs: "-3px", md: "-7px" },
                                            // marginRight: "5px"

                                        }}

                                            gutterBottom
                                            component='div'

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


                                        <TableCell align='center'

                                            className='flex border-x border-y 
                                    border-solid border-[#D1D0D6] rounded-md text-left text-[14px] text-[#000]
                                     font-semibold mt-[10px]  w-[290px] mr-[10px]   '
                                            sx={{ background: row.background, display: "flex", fontFamily: "Inter" }} >

                                            <Box sx={{ width: "22px", height: "22px", borderRadius: "5px" }} bgcolor={row.color}
                                                marginRight="22px" >
                                            </Box>
                                            {row.Network}


                                        </TableCell>

                                        <TableCell align='center' className=' border-l border-y 
                                    border-solid border-[#D3D3D3] rounded-l-md text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{ background: row.background, minWidth: 95, display: "flex" }}>


                                            {row.JUL}

                                        </TableCell>

                                        <TableCell align='center' className=' border-y 
                                    border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{ background: row.background, minWidth: 95, display: "flex" }}>


                                            {row.AUG}

                                        </TableCell>
                                        <TableCell align='center' className=' border-y 
                                    border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{ background: row.background, minWidth: 95, display: "flex" }}>


                                            {row.SEPT}

                                        </TableCell>

                                        <TableCell align='center' className=' border-y 
                                    border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                                     font-light mt-[10px] '
                                            sx={{ background: row.background, minWidth: 95, display: "flex" }}>

                                            {row.OCT}

                                        </TableCell>
                                        <TableCell align='center' className=' border-y 
                                    border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{ background: row.background, minWidth: 95, display: "flex" }}>


                                            {row.NOV}

                                        </TableCell>
                                        <TableCell align='center' className=' border-r border-y 
                                    border-solid border-[#D3D3D3] rounded-r-md 
                                      text-center text-[12px] text-[#000]
                                     font-light mt-[10px] mr-[8px] 
                                     
                                     '
                                            sx={{
                                                background: row.background, minWidth: 95, display: "flex"

                                            }}>



                                            {row.DEC}


                                        </TableCell>

                                        <TableCell align='center' className='border-l border-y 
                                    border-solid border-[#D3D3D3] rounded-l-md text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{
                                                background: row.background, minWidth: 95, display: "flex"

                                            }}>


                                            {row.JAN}

                                        </TableCell>
                                        <TableCell align='center' className=' border-y 
                                    border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                                     font-light mt-[10px]  '
                                            sx={{ background: row.background, minWidth: 95, display: "flex" }}>


                                            {row.FEB}

                                        </TableCell>
                                        <TableCell align='center' className='border-r border-y 
                                    border-solid border-[#D3D3D3] rounded-r-md text-center text-[12px] text-[#000]
                                     font-light mt-[10px] '
                                            sx={{
                                                background: row.background, minWidth: 95, display: "flex"

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