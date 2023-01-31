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
import Image from 'next/image';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className="text-[12px] font-light" >

                <TableCell align="center" className='flex pb=[20px] text-[18px] font-medium text-[#000000]'>

                    <Image src={row.image} alt="" width={30} height={30} className="mr-[20px]" />
                    {row.name}
                </TableCell>
                <TableCell align="center" className=' text-[18px] font-medium' >{row.amount}</TableCell>
                <TableCell align="center" className=' text-[18px] font-medium'>{row.change}</TableCell>
                <TableCell align="center" className='text-[#FF6846] text-[18px] font-medium'><KeyboardArrowDownIcon /> {row.total}
                </TableCell>
                <TableCell align="center" className=' text-[18px] font-medium'>{row.holdings}</TableCell>
                <TableCell align="center" className='text-[#53A57C] text-[18px] font-medium'> <KeyboardArrowUpIcon /> {row.price}</TableCell>
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
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
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

export default function CollapsibleTable() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' className='border-y border-solid border-[#000000]
                         text-[15px] text-[#212529]'>NAME</TableCell>

                            <TableCell align='center' className='border-y border-solid border-[#000000]
                         text-[15px] text-[#212529]'>AMOUNT</TableCell>

                            <TableCell align='center' className='border-y border-solid border-[#000000]
                         text-[15px] text-[#212529]'>PRICE</TableCell>

                            <TableCell align='center' className='border-y border-solid border-[#000000]
                         text-[15px]text-[#212529]'>24H CHANGE</TableCell>

                            <TableCell align='center' className='border-y border-solid border-[#000000]
                         text-[15px]text-[#212529]'>TOTAL</TableCell>

                            <TableCell align='center' className='border-y border-solid border-[#000000] 
                        text-[15px]text-[#212529]'>CURRENT HOLDINGS P/L</TableCell>

                            <TableCell align='center' className='border-y border-solid border-[#000000]
                         text-[15px]text-[#212529]' />

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>

            <Box display="flex" justifyContent="center" paddingTop="375px" >

                <Typography className='text-[56px]'>Empowered treasury</Typography>

            </Box>
            <Box display="flex" justifyContent="center" paddingBottom="30px" >
                <Typography className='text-[15px] text-[#FF6846]'>Create your treas
                    <KeyboardArrowRightIcon />
                </Typography>
            </Box>

        </>
    );
}