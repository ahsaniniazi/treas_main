import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import Image from 'next/image';
import { BorderStyleRounded } from '@mui/icons-material';
import { borderRadius } from '@mui/system';

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
        "#000", "Green", "treas beg. of the month", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#53A57C", "", "Inflows", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#FF6846", "", "OutFlows", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#000", "", "treas beg. of the month", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#979797", "", "Total Fees", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#53A57C", "", "Inflows", '', "", "", "", "",
        "", "", "", ""),
    createData("", "", "Total Transactions", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("", "", "Total Contacts", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),

]
export default function DenseTable() {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow sx={{ m: 1, lineHeight: 8 }}
                    >
                        <TableCell >

                            <FormControl sx={{ m: 1, minWidth: 250 }} className="flex justify-evenly">
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}

                                >
                                    <MenuItem value="">
                                        <em><PublicSharpIcon /> All Networks</em>
                                    </MenuItem>
                                    <MenuItem value={10} className="text-[12px] text- flex justify-between ">

                                        <Typography className='text-[14px] font-bold'> All Networks </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={20} className="text-[12px] flex justify-between font-bold">
                                        <Image src="image/currency icon/Ethereum.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Etehreum </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={20} className="text-[12px] flex justify-between font-bold">
                                        <Image src="image/currency icon/BSC.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> BSC </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={40} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency icon/Moonriver.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Moonriver </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>

                                    <MenuItem value={50} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency icon/Polygon.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Polygon </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={60} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency icon/Avalanche.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Avalanche </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={70} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency icon/Fantom.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Fantom </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={80} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency icon/Arbitrum.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Arbitrum </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={90} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency icon/Gnosis Chain.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Gnosis Chain </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={99} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency icon/Aurora.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'>Aurora</Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                </Select>
                            </FormControl>

                        </TableCell>

                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ m: 1, minWidth: 90 }}
                        >JUL. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ m: 1, minWidth: 90 }}>AUG. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ m: 1, minWidth: 90 }}>SEPT. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ m: 1, minWidth: 90 }}>OCT. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ m: 1, minWidth: 90 }}>NOV. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ m: 1, minWidth: 90 }}>DEC. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ m: 1, minWidth: 90 }}>JAN. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ m: 1, minWidth: 90 }}>FEB. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'
                            sx={{ m: 1, minWidth: 90 }}>MAR. 22</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody className='leading-8'>
                    {rows.map((row) => (
                        <TableRow
                            key={row.JUL}
                        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
                            <TableCell align='center' className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000] font-semibold mt-[10px] w-[290px]'>

                                <Box sx={{ width: "22px", height: "22px", borderRadius: "5px" }} bgcolor={row.color} marginRight="18px">
                                </Box>
                                {row.Network}

                            </TableCell>
                            <TableCell align='center' className='border-l border-y 
                            border-solid border-[#D3D3D3]  text-[#000]  mt-[15px]'>
                                {row.JUL}

                            </TableCell>
                            <TableCell align='center' className='border-y 
                            border-solid border-[#D3D3D3]  text-[#000]'>
                                {row.AUG}

                            </TableCell>
                            <TableCell align='center'>{row.SEPT}
                            </TableCell>
                            <TableCell align='center' >{row.OCT}</TableCell>
                            <TableCell align='center'>{row.NOV}</TableCell>
                            <TableCell align='center' className='border-r border-y 
                            border-solid border-[#D3D3D3]  text-[#000]' >{row.DEC}</TableCell>
                            <TableCell align='center' className='border-l border-y 
                            border-solid border-[#D3D3D3]  text-[#000]' >{row.JAN}</TableCell>
                            <TableCell align='center'>{row.FEB}</TableCell>
                            <TableCell align='center' className='border-r border-y 
                            border-solid border-[#D3D3D3]  text-[#000]' >{row.MAR}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}