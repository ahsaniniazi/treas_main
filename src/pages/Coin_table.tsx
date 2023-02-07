import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Image from "next/image";
import { LineChart, Line } from "recharts";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

function createData(
    image: string,
    name: string,
    amount: string,
    change: string,
    total: string,
    holdings: string,
    price: string
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
                date: "2020-01-05",
                customerId: "11091700",
                amount: 3,
            },
            {
                date: "2020-01-02",
                customerId: "Anonymous",
                amount: 1,
            },
        ],
    };
}

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

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
                <TableCell align="center" className='text-[#FF6846] text-[18px] font-medium'>
                    <KeyboardArrowDownIcon /> {row.total}
                </TableCell>
                <TableCell align="center" className=' text-[18px] font-medium'>{row.holdings}
                </TableCell>
                <TableCell align="center" className='text-[#53A57C] text-[18px] font-medium'>
                    <KeyboardArrowUpIcon /> {row.price}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <MoreVertIcon /> : <MoreHorizIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse
                        in={open}
                        timeout='auto'
                        unmountOnExit
                    >
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant='h6'
                                gutterBottom
                                component='div'
                                className='flex '
                            >
                                1 496,518 $US &nbsp;{" "}
                                <Typography
                                    variant='h6'
                                    component='div'
                                    gutterBottom
                                    className='text-red-500'
                                >
                                    -0,54%
                                </Typography>
                            </Typography>
                            <Typography
                                className='text-[12px] -mt-4 ml-1 text-stone-400'
                                variant='h6'
                                gutterBottom
                                component='div'
                            >
                                10 nov. 2022, 03:24
                            </Typography>
                            <Grid
                                container
                                spacing={2}
                            >
                                <Grid
                                    item
                                    xs={10}
                                >
                                    {/* <Item> */}
                                    <LineChart
                                        width={800}
                                        height={250}
                                        data={data}
                                    >
                                        <Line
                                            type='monotone'
                                            dataKey='pv'
                                            stroke='#ffc107'
                                            strokeWidth={2}
                                        />
                                    </LineChart>
                                    {/* </Item> */}
                                </Grid>
                                <Grid
                                    item
                                    xs={2}
                                    className='flex flex-col'
                                >
                                    <Typography
                                        variant='h6'
                                        gutterBottom
                                        component='div'
                                        className='font-bold text-[18px]'
                                    >
                                        Market Cap
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        gutterBottom
                                        component='div'
                                        className='text-[16px] -mt-3 mb-4'
                                    >
                                        $180B
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        gutterBottom
                                        component='div'
                                        className='font-bold text-[18px]'
                                    >
                                        Circulating Supply
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        gutterBottom
                                        component='div'
                                        className='text-[16px] -mt-3 mb-4'
                                    >
                                        121M ETH
                                    </Typography>

                                    <Typography
                                        variant='h6'
                                        gutterBottom
                                        component='div'
                                        className='font-bold text-[18px]'
                                    >
                                        24 hours volume
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        gutterBottom
                                        component='div'
                                        className='text-[16px] -mt-3 mb-4'
                                    >
                                        $18B
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        gutterBottom
                                        component='div'
                                        className='font-bold text-[18px]'
                                    >
                                        Call-time high
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        gutterBottom
                                        component='div'
                                        className='text-[16px] flex -mt-3 mb-4'
                                    >
                                        $4,874 &nbsp; <Typography
                                            variant='h6'
                                            gutterBottom
                                            component='div'
                                            className="text-red-500 text-[16px]"
                                        >
                                            -69.33%
                                        </Typography>
                                    </Typography>
                                    <Typography variant="h6" gutterBottom component="div" className="text-stone-400 text-[14px] -mt-7">10 nov. 2021, 15:24</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData("image/Bit coin.svg", "Bitcoin", "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/etereum.svg", "Ethereum", "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/thether.svg", "Thether", "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/USD.svg", "USD", "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
];

export default function CollapsibleTable() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label='collapsible table'>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000]'
                            >
                                NAME
                            </TableCell>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000]'
                            >
                                AMOUNT
                            </TableCell>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000]'
                            >
                                PRICE
                            </TableCell>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000]'
                            >
                                24H CHANGE
                            </TableCell>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000]'
                            >
                                TOTAL
                            </TableCell>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000]'
                            >
                                CURRENT HOLDINGS P/L
                            </TableCell>
                            <TableCell align='center'
                                className='border-y border-solid border-[#000000]' />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row
                                key={row.name}
                                row={row}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box display="flex" justifyContent="center" paddingTop="375px" >

                <Typography className='text-[56px]'>Empowered
                </Typography>
                <Box display="flex" marginLeft={2} marginTop={2}>
                    <Box className='rotate-[-7.12deg]  bg-[#FF9781] 
         h-[52px] w-[107px] '>
                        <Typography
                            variant='h3'
                            gutterBottom
                            component='div'
                            className='text-56px font-normal text-[#000000] 
                font-[Libre Baskerville] sticky rotate-[7.12deg] pt-[2px]'
                        >
                            treas
                        </Typography>
                    </Box>

                    <Typography
                        variant='h3'
                        className='text-56px font-[Libre Baskerville] font-normal text-[#000000] 
                 '>
                        ury
                    </Typography>
                </Box>

            </Box>
            <Box display="flex" justifyContent="center" paddingBottom="30px" >
                <Typography className='text-[15px] text-[#FF6846]'>Create your treas
                    <KeyboardArrowRightIcon />
                </Typography>
            </Box>
        </>
    );
}
