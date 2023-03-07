import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';
import { Line, LineChart } from "recharts";


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

function createData(
    image: string,
    name: string,
    symbol: string,
    amount: string,
    price: string,
    change: string,
    total: string,
    holdings: string,
) {
    return {
        image,
        name,
        symbol,
        amount,
        price,
        change,
        total,
        holdings,

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

                <TableCell component="th" scope="row" >
                    <Box display="flex" alignItems="center">
                        <Image src={row.image} alt="fund me" width={40} height={40} />
                        <Typography marginLeft="10px" className=" text-[18px] font-medium text-[#000000] 
                        max-xs:text-[12px]
                        ">{row.name}</Typography>
                        <Typography marginLeft="5px" marginTop="4px" className=" text-[#8A8A8A] text-[13px] font-thin 
                        max-xs:text-[9px]
                        ">
                            {row.symbol}</Typography>
                    </Box>
                </TableCell>

                <TableCell sx={{ fontSize: { xs: '12px', md: '16px', lg: "16px" }, fontWeight: "400" }} align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell sx={{ color: "#FF6846", fontSize: { xs: '12px', md: '16px', lg: "16px" }, fontWeight: "500" }} align="center"> <KeyboardArrowDownIcon />
                    {row.change}</TableCell>
                <TableCell sx={{ fontSize: { xs: '12px', md: '16px', lg: "16px" }, fontWeight: "400" }} align="center">{row.total}</TableCell>
                <TableCell sx={{ color: "#53A57C", fontSize: { xs: '12px', md: '16px', lg: "16px" }, fontWeight: "400" }} align="center"><KeyboardArrowUpIcon />
                    {row.holdings}</TableCell>
                <TableCell >
                    <IconButton
                        sx={{ color: "black" }}
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
                                </Grid>
                                <Grid display="flex" flexDirection="column"
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
    createData("image/Bit coin.svg", "Bitcoin", "BTC", "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/etereum.svg", "Ethereum", "ETH", "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/thether.svg", "Thether", "USDT", "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
    createData("image/USD.svg", "USD", "USDC", "3.00", "$19,275.48", " - 0,54%", "$57,827.55", "+ $345 + 1,54%"),
];

export default function CollapsibleTable() {
    return (
        <Box>
            <Box
                overflow={{ xs: 'scroll' }} className='scrollStyle'
            >
                <Table aria-label="collapsible table" >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align='left'
                                className='border-y border-solid border-[#000000]'
                            >
                                <Typography className="ml-[40px] max-xs:text-[12px]">   NAME </Typography>
                            </TableCell>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000]'
                            >
                                <Typography className='max-xs:text-[12px]'>   AMOUNT </Typography>

                            </TableCell>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000]'
                            >
                                <Typography className='max-xs:text-[12px]'>   PRICE </Typography>

                            </TableCell>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000] '
                            >
                                <Typography className='max-xs:text-[12px]'>   24H CHANGE </Typography>

                            </TableCell>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000]'
                            >
                                <Typography className='max-xs:text-[12px]'>  TOTAL</Typography>

                            </TableCell>
                            <TableCell
                                align='center'
                                className='border-y border-solid border-[#000000]'
                            >
                                <Typography className='max-xs:text-[12px]'>  CURRENT HOLDINGS P/L</Typography>


                            </TableCell>
                            <TableCell align='left'
                                className='border-y border-solid border-[#000000]' />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </Box>

            <Box display="flex" justifyContent="center"
                paddingTop={{ xs: '96px', md: "375px", lg: "375px" }}
                alignItems={'center'}
                flexDirection={{ xs: 'column', md: 'row', lg: 'row' }}>
                <Box>
                    <Typography
                        variant='h3'
                        className='text-[56px] max-xs:text-[34px] text-black'>Empowered
                    </Typography>
                </Box>
                <Box display="flex" marginLeft={2} >
                    <Box sx={{
                        height: { xs: "23px", md: "38px" },
                        width: { xs: "76px", md: "107px" },
                        marginTop: "12px",
                        backgroundColor: "#FF9781",
                        rotate: "-6.12deg",
                    }}
                    >
                        <Typography

                            gutterBottom
                            component='div'
                            sx={{
                                fontSize: "56px",
                                fontWeight: "400",
                                color: "#000000",
                                fontFamily: "Libre Baskerville",
                                position: "sticky",
                                rotate: "7.12deg",
                                paddingTop: "2px",
                                marginTop: "-12px"


                            }}
                        >
                            treas
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: "56px",
                            fontWeight: "400",
                            color: "#000000",
                            fontFamily: "Libre Baskerville",
                        }}>
                        ury </Typography></Box>
            </Box>
            <Box display="flex" justifyContent="center"
                paddingBottom="30px"
                marginBottom={{ xs: '46px', md: 0, lg: 0 }}
                marginTop="20px" >
                <Typography className='text-[15px] text-[#FF6846] cursor-pointer
                '>Create your treas
                    <KeyboardArrowRightIcon className="cursor-pointer" />
                </Typography>
            </Box>
        </Box >

    );
}