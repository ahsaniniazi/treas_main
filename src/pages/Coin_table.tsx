
import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
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
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
import { useRouter } from "next/router";


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

function Row({ row }: any) {
    const [open, setOpen] = React.useState(false);

    // console.log(curencylogo)


    const balance = Number(row.userToken?.balance)
    const price = row.prices?.quotes?.USD?.price;
    const thumbnail = row?.userToken?.thumbnail
    return (
        <React.Fragment>
            <TableRow className="text-[12px] font-light bg-" >

                <TableCell sx={{ display: "flex", alignItems: "center" }} align="left" className=' pb=[20px] text-[18px] font-medium text-[#000000]'>
                    <Image src={thumbnail || "/image/currency_icon/new_currency.jpg"} alt="" width={56} height={40} className="mr-[10px]" />
                    <Typography className="mr-[10px] text-[18px] font-medium text-[#000000] ">
                        {row?.userToken?.name}
                    </Typography>
                    <Typography className="mr-[10px] text-[#8A8A8A] text-[13px] font-thin ">
                        {row?.userToken?.symbol}
                    </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "18px" }} align="left" className=' font-medium' >{balance.toFixed(3)}</TableCell>
                <TableCell sx={{ fontSize: "18px" }} align="left" className='  font-medium'>{(price)?.toFixed(3) || 0}</TableCell>
                <TableCell sx={{ color: "#FF6846", fontSize: "18px" }} align="left" className='font-medium ' >
                    <Typography display="flex">

                        {(row?.prices?.quotes?.USD?.percent_change_24h) <= 0 ? <KeyboardArrowDownIcon /> :
                            <KeyboardArrowUpIcon />
                        }

                        {(row?.prices?.quotes?.USD?.percent_change_24h)?.toFixed(3) || 0}

                    </Typography>

                </TableCell>
                <TableCell align="left" className=' text-[18px] font-medium'>{(Number(balance) * Number(price)).toFixed(3)}
                </TableCell>
                <TableCell sx={{ color: "#53A57C", fontSize: "18px" }} align="left" className=' font-medium'>
                    <Typography display="flex">
                        <KeyboardArrowUpIcon /> {balance}
                    </Typography>
                </TableCell>

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
                                        {row?.prices?.quotes?.USD?.market_cap}
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
                                        {row?.prices?.circulating_supply}
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
                                        {row?.prices?.quotes?.USD?.volume_24h}
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

    const [showResult, setShowResult] = React.useState(false);
    const [result, setResult] = React.useState<any>([]);
    const [address, setAddress] = React.useState("");

    const router = useRouter()
    // console.log(router?.query.id)

    const handleSubmit = async () => {
        const chain = EvmChain.ETHEREUM;

        let address = "0x391716d440c151c42cdf1c95c1d83a5427bca52c"

        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
            address,
            chain,
        });

        const res = await response.toJSON();
        console.log(res);

        const api_price = await fetch("https://api.coinpaprika.com/v1/tickers")
        const priceData = await api_price.json()

        const tokenWithPrice = res.map((token: any) => {
            const isFind = priceData.find((tokenPrice: any) => tokenPrice.symbol === token.symbol)
            if (isFind) {

                return { userToken: token, prices: isFind }
            }
            else {
                return { userToken: token, prices: undefined }
            }

        })
        console.log({ data: tokenWithPrice });

        setResult(tokenWithPrice);




    }

    const initilaizeMorallis = async () => {
        await Moralis.start({
            apiKey: "IKOjk5iKeUSeiiA0ZtO5Yp7QIULfszWqnudfZesEl0SCz743iH7tHH7dxnM1RwkB",
        });
    }

    React.useEffect(() => {

        initilaizeMorallis()
        handleSubmit()
    }, [router?.query.id]);



    return (
        <Box>

            {result.length > 0 && <Table aria-label='collapsible table'>
                <TableHead>
                    <TableRow >
                        <TableCell
                            align='left'
                            className='border-y border-solid border-[#000000]'
                        >
                            <Typography className="ml-[40px]">   NAME </Typography>
                        </TableCell>
                        <TableCell
                            align='left'
                            className='border-y border-solid border-[#000000]'
                        >
                            <Typography>   AMOUNT </Typography>

                        </TableCell>
                        <TableCell
                            align='left'
                            className='border-y border-solid border-[#000000]'
                        >
                            <Typography>   PRICE </Typography>

                        </TableCell>
                        <TableCell
                            align='left'
                            className='border-y border-solid border-[#000000] '
                        >
                            <Typography>   24H CHANGE </Typography>

                        </TableCell>
                        <TableCell
                            align='left'
                            className='border-y border-solid border-[#000000]'
                        >
                            <Typography>  TOTAL</Typography>

                        </TableCell>
                        <TableCell
                            align='left'
                            className='border-y border-solid border-[#000000]'
                        >
                            <Typography>  CURRENT HOLDINGS P/L</Typography>


                        </TableCell>
                        <TableCell align='left'
                            className='border-y border-solid border-[#000000]' />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        result.length && result?.map((row: any) => (
                            <Row
                                key={row.name}
                                row={row}
                            />
                        ))}

                </TableBody>
            </Table>}




            <Box display="flex" justifyContent="center" paddingTop="375px" >

                <Typography
                    variant='h3'
                    className='text-[56px]'>Empowered
                </Typography>
                <Box display="flex" marginLeft={2}>
                    <Box className='rotate-[-7.12deg]  bg-[#FF9781]
         h-[52px] w-[107px] '>
                        <Typography
                            sx={{
                                fontSize: "56px",
                                fontWeight: "400",
                                color: "#000000",
                                fontFamily: "Libre Baskerville",
                                position: "sticky",
                                rotate: "7.12deg",
                                paddingTop: "2px"

                            }}

                            gutterBottom
                            component='div'

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

                        }}


                    >
                        ury
                    </Typography>
                </Box>

            </Box>
            <Box display="flex" justifyContent="center" paddingBottom="30px" >
                <Typography className='text-[15px] text-[#FF6846] cursor-pointer'>Create your treas
                    <KeyboardArrowRightIcon className="cursor-pointer" />
                </Typography>
            </Box>
        </Box>
    );
}

