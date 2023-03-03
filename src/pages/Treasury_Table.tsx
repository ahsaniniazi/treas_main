import { BorderStyle } from '@mui/icons-material';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { borderBottomColor, borderRightColor } from '@mui/system';
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
        "", "", "", ""),
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

        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead >
                <TableRow sx={{ m: 0, lineHeight: 8, display: "flex" }}
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
                {rows.map((row) => (
                    <TableRow sx={{ display: "flex", '&:nth-child(3) td,&:nth-child(7) td, &:last-child td': { border: 0 } }}
                        key={row.JUL}
                    // sx={{ '&:6th-child td, &:6th-child th': { border: 0 } }}
                    >


                        <TableCell align='center' className='flex border-x border-y 
                            border-solid border-[##D1D0D6] rounded-md text-left text-[14px] text-[#000]
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
                            border-solid border-[#D3D3D3] text-center text-[12px] text-[#000]
                             font-light mt-[10px] '
                            sx={{
                                background: row.background, minWidth: 90

                            }}>


                            {row.MAR}

                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table >

    );
}