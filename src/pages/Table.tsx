import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SvgIconClassKey } from '@mui/material';
import Image from 'next/image';
import { MoreHoriz } from '@mui/icons-material';


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
        image,
        name,
        amount,
        change,
        total,
        holdings,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>

            <TableRow>

                <TableCell component="th" scope="row" align='center' className='font-medium flex justify-center text-[Black] text-[18px]'>
                    <Image src={row.image} alt="This" width={40} height={40} className="mr-[20px] " />
                    {row.name}
                </TableCell>
                <TableCell align='center'>{row.amount}</TableCell>
                <TableCell align='center'>{row.change}</TableCell>
                <TableCell align='center'>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                    >
                        <KeyboardArrowDownIcon />
                        <TableCell align='center' className='text-[red]'>{row.total}</TableCell>
                    </IconButton>

                </TableCell>
                <TableCell align='center'>{row.holdings}</TableCell>
                <TableCell align='center'>
                    <IconButton
                        aria-label="expand row"
                        size="small"

                    >
                        <KeyboardArrowUpIcon />
                        <TableCell align='center' className='text-[#53A57C]'>{row.price}</TableCell>
                    </IconButton></TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <MoreHoriz /> : <MoreHoriz />}
                    </IconButton>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>

                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>

        </React.Fragment>


    );
}

const rows = [

    createData("image/Bit coin.svg", 'Bitcoin', "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/etereum.svg", 'Ethereum', "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/thether.svg", 'Thether', "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/USD.svg", 'USD', "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
];
function CollapsibleTable() {

    return (



        <TableContainer component={Paper}>
            <div></div>
            <Table aria-label="collapsible table" >
                <TableHead >
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
                <TableBody >
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CollapsibleTable;