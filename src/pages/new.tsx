import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { Collapse, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from '@mui/system';
import { AutoGraph } from '@mui/icons-material';


function createData(
    image: string,
    name: string,
    amount: string,
    change: string,
    total: string,
    holdings: string,
    price: string,
) {
    return {
        image, name, amount, change, total, holdings, price
    };
}

const rows = [

    createData("image/Bit coin.svg", 'Bitcoin', "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/etereum.svg", 'Ethereum', "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/thether.svg", 'Thether', "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/USD.svg", 'USD', "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
];

export default function DenseTable() {
    const [open, setOpen] = React.useState(false);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow >
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>NAME</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>AMOUNT</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>PRICE</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>24H CHANGE</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>TOTAL</TableCell>
                        <TableCell align='center' className='border-y border-solid border-[#000000]'>CURRENT HOLDINGS P/L</TableCell>
                        <TableCell className='border-y border-solid border-[#000000]'></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="center" className='flex pb=[20px]'>
                                <Image src={row.image} alt="" width={30} height={30} className="mr-[20px]" />
                                {row.name}
                            </TableCell>

                            <TableCell align="center">{row.amount}</TableCell>
                            <TableCell align="center">{row.change}</TableCell>
                            <TableCell align="center">{row.total}</TableCell>
                            <TableCell align="center">{row.holdings}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell>
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setOpen(!open)}
                                >
                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>

                        </TableRow>


                    ))}


                </TableBody>
            </Table>
        </TableContainer>
    );
}