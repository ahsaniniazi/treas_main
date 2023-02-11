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
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
import styles from "src/styles/Token.module.css";
import Web3 from "web3";
import TablePagination from '@mui/material/TablePagination';

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

    return (
        <React.Fragment>
            <TableRow className="text-[12px] font-light" >

                <TableCell align="left" className='flex pb=[20px] text-[18px] font-medium text-[#000000]'>

                    <Image src={row.token.thumbnail} alt="" width={30} height={30} className="mr-[10px]" />
                    <Typography className="mr-[10px] text-[18px] font-thin text-[#000000]">
                        {row.token.name}
                    </Typography>
                    <Typography className="mr-[10px] text-[#8A8A8A] text-[13px] font-thin">
                        {row.token.symbol}
                    </Typography>
                </TableCell>
                <TableCell align="left" className=' text-[18px] font-medium' >{row.token.balance}</TableCell>
                <TableCell align="left" className=' text-[18px] font-medium'>{(row.price.usdPrice).toFixed(3)}</TableCell>
                <TableCell align="left" className='text-[#FF6846] text-[18px] font-medium'>
                    <KeyboardArrowDownIcon /> {((1673.78 - 1617.14) / 1617.14 * 100).toFixed(3)}
                </TableCell>
                <TableCell align="left" className=' text-[18px] font-medium'>{(Number(row.token.balance) * Number(row.price.usdPrice)).toFixed(3)}
                </TableCell>
                <TableCell align="left" className='text-[#53A57C] text-[18px] font-medium'>
                    <KeyboardArrowUpIcon /> {row.balance?.slice(0, 5)}</TableCell>
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

    const [showResult, setShowResult] = React.useState(false);
    const [result, setResult] = React.useState<any>([]);
    const [address, setAddress] = React.useState("");

    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 2));
        setPage(0);
    };

    const getPrice = async (item, Moralis, chain) => {
        return new Promise((resp, rej) => {
            const response = Moralis.EvmApi.token
                .getTokenPrice({
                    address: item.token_address,
                    chain,
                })
                .then((res) => {
                    setTimeout(() => resp(res), 2000);
                })
                .catch((err) => rej(err));
        });
    };

    const handleSubmit = async () => {
        const chain = EvmChain.ETHEREUM;



        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
            address,
            chain,
        });

        const res = await response.toJSON();
        console.log(res);
        const symbol = (res.slice(0, 15))
        // res.filter(item => item.thumbnail && (item.symbol === "BTC"
        //     || item.symbol === "WETH" || item.symbol === "USDT" || item.symbol === "USDC" || item.symbol === "ETH" || item.symbol === "BSC" || item.symbol === "LINK"));
        let finalResult = []
        const promises = symbol.map(el => getPrice(el, Moralis, chain));
        const pr = Promise.all(promises).then(data => {
            const resp = data.map((item, index) => {
                return { token: symbol[index], price: item.jsonResponse }

            })
            console.log(resp)
            setResult(resp)
            return finalResult = [...resp]
        })
            .catch(err => {
                console.log(err)
            })
        const all = await pr
        console.log(all)
        console.log({ data: finalResult });

        console.log(response.toJSON());
        // setResult(response.toJSON());
        setShowResult(true);

    }

    // const request =
    //     await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,Tether,bsc,ethereum&vs_currencies=usd")
    //         .then(response => response.json()).then(data => {

    //             const merge = { tokens: [...symbol], price: data }


    //         }
    //         )
    // setShowResult(true);
    const initilaizeMorallis = async () => {
        await Moralis.start({
            apiKey: "IKOjk5iKeUSeiiA0ZtO5Yp7QIULfszWqnudfZesEl0SCz743iH7tHH7dxnM1RwkB",
        });
    }
    console.log(result)

    React.useEffect(() => {
        // handleSubmit();
        // tokenprice();
        initilaizeMorallis()
    });



    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label='collapsible table'>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align='left'
                                className='border-y border-solid border-[#000000]'
                            >
                                NAME
                            </TableCell>
                            <TableCell
                                align='left'
                                className='border-y border-solid border-[#000000]'
                            >
                                AMOUNT
                            </TableCell>
                            <TableCell
                                align='left'
                                className='border-y border-solid border-[#000000]'
                            >
                                PRICE
                            </TableCell>
                            <TableCell
                                align='left'
                                className='border-y border-solid border-[#000000]'
                            >
                                24H CHANGE
                            </TableCell>
                            <TableCell
                                align='left'
                                className='border-y border-solid border-[#000000]'
                            >
                                TOTAL
                            </TableCell>
                            <TableCell
                                align='left'
                                className='border-y border-solid border-[#000000]'
                            >
                                CURRENT HOLDINGS P/L
                            </TableCell>
                            <TableCell align='left'
                                className='border-y border-solid border-[#000000]' />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            result.length && result?.map((row) => (
                                <Row
                                    key={row.name}
                                    row={row}
                                />
                            ))}

                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <Box marginTop="300px">
                <section className={styles.main}>
                    <form
                        className={styles.getTokenForm}
                        name="create-profile-form"
                        method="POST"
                        action="#"
                    >
                        <label className={styles.label} htmlFor="walletAddress">
                            Add ERC20 Wallet Address
                        </label>
                        <input
                            className={styles.walletAddress}
                            type="text"
                            id="walletAddress"
                            name="walletAddress"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            required
                        />
                    </form>
                    <button className={styles.form_btn} onClick={handleSubmit}>
                        Submit
                    </button>
                </section>
            </Box>

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
