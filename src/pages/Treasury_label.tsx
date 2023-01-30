import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

function createData(
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
    return { Network, JUL, AUG, SEPT, OCT, NOV, DEC, JAN, FEB, MAR };
}

const rows = [

    createData("treas beg. of the month", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("Inflows", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("", '', "", "Unlock your treasury with labels", " ", "",
        "", "", "", ""),
    createData("treas beg. of the month", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("Inflows", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("Total transactions", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("Total contacts", '123,434', "123,434", "123,434", " 123,434", "123,434",
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
                    <TableRow >
                        <TableCell className='border-y border-solid border-[#000000]'>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>All Networks</em>
                                    </MenuItem>
                                    <MenuItem value={10}>All Networks   1223,3 $US</MenuItem>
                                    <MenuItem value={20}>Ethereum   1223,3 $US</MenuItem>
                                    <MenuItem value={30}>BSC   1223,3 $US</MenuItem>
                                    <MenuItem value={40}>Moonriver   1223,3 $US</MenuItem>
                                    <MenuItem value={50}>Polygon   1223,3 $US</MenuItem>
                                    <MenuItem value={60}>Avalanche   1223,3 $US</MenuItem>
                                    <MenuItem value={70}>Fantom   1223,3 $US</MenuItem>
                                    <MenuItem value={80}>Arbitrum   1223,3 $US</MenuItem>
                                    <MenuItem value={90}>Gnosis Chain   1223,3 $US</MenuItem>
                                    <MenuItem value={99}>Aurora   1223,3 $US</MenuItem>
                                </Select>
                            </FormControl>

                        </TableCell>

                        <TableCell align='center' className='border-y border-solid border-[#000000]'>JUL. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>AUG. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>SEPT. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>OCT. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>NOV. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>DEC. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>JAN. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>FEB. 22</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>MAR. 22</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody className='border-x border-y border-solid border-[#D3D3D3]'>
                    {rows.map((row) => (
                        <TableRow
                            key={row.JUL}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='center' className='border-x border-y border-solid border-[#D3D3D3]'>
                                {row.Network}
                            </TableCell>
                            <TableCell align='center' className='border-y border-solid border-[#D3D3D3]'>
                                {row.JUL}
                            </TableCell>
                            <TableCell >{row.AUG}</TableCell>
                            <TableCell align='center' className='border-y border-solid border-[#D3D3D3]'>{row.SEPT}</TableCell>
                            <TableCell align='center' className='border-y  border-solid border-[#D3D3D3]'>{row.OCT}</TableCell>
                            <TableCell align='center' className='border-y   border-solid border-[#D3D3D3]'>{row.NOV}</TableCell>
                            <TableCell align='center' className='border-y border-x  border-solid border-[#D3D3D3]'>{row.DEC}</TableCell>
                            <TableCell align='center' className='border-y   border-solid border-[#D3D3D3]'>{row.JAN}</TableCell>
                            <TableCell align='center' className='border-y  border-solid border-[#D3D3D3]'>{row.FEB}</TableCell>
                            <TableCell align='center' className='border-y border-x border-solid border-[#D3D3D3]'>{row.MAR}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}