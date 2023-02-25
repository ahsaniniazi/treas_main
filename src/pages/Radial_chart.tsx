import { RoundedCorner } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import Web3 from "web3";
import { RadialBarChart, RadialBar, Legend } from "recharts";
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
import styles from "src/styles/Token.module.css";
import { useRouter } from "next/router";


const Data = [
    {
        name: "BTC",
        uv: 32,
        fill: "purple"
    },
    {
        name: "ETH",
        uv: 44.0,
        fill: "#fd7e14"
    },
    {
        name: "USDT",
        uv: 16.0,
        fill: "#45B39D"
    },
    {
        name: "Other",
        uv: 8.0,
        fill: "#dc3545"
    },
];

const style = {
    top: 300,
    left: 40,
    lineHeight: "24px"

};


export default function RAdial() {
    const router = useRouter()
    // console.log(router?.query.id)
    // console.log(window?.location?.pathname)
    // 

    function convertToInternationalCurrencySystem(props: number) {

        // Nine Zeroes for Billions
        return Math.abs(Number(props)) >= 1.0e+9

            ? (Math.abs(Number(props)) / 1.0e+9).toFixed(1) + "B"
            // Six Zeroes for Millions 
            : Math.abs(Number(props)) >= 1.0e+6

                ? (Math.abs(Number(props)) / 1.0e+6).toFixed(1) + "M"
                // Three Zeroes for Thousands
                : Math.abs(Number(props)) >= 1.0e+3

                    ? (Math.abs(Number(props)) / 1.0e+3).toFixed(1) + "K"

                    : Math.abs(Number(props));
    }

    const [result, setResult] = React.useState<any>([]);
    // const [address, setAddress] = React.useState("");

    let address = router?.query.id || "0x391716d440c151c42cdf1c95c1d83a5427bca52c";



    const handleSubmit = async () => {
        const chain = EvmChain.ETHEREUM;

        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
            address,
            chain,
        });

        // console.log(response)
        const res = await response.toJSON();
        console.log(res);

        const api_price = await fetch("https://api.coinpaprika.com/v1/tickers")
        const priceData = await api_price.json()


        const tokenWithPrice = res.map((token: any) => {
            const convert = Web3.utils.fromWei(token.balance, 'ether');
            const balance = convertToInternationalCurrencySystem(Number(convert));
            // console.log(convert)


            const isFind = priceData.find(tokenPrice => tokenPrice.symbol === token.symbol)
            if (isFind) {
                const mergedPrice = { ...token, ...isFind, balance }
                return mergedPrice
            }
            else {
                return token

            }
        })

        console.log({ data: tokenWithPrice });


        setResult(tokenWithPrice);

    }
    console.log(result)
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
        <React.Fragment>
            <Box sx={{ display: "flex", direction: "column" }}>

                <RadialBarChart
                    width={225}
                    height={300}
                    cx={130}
                    cy={150}
                    innerRadius={100}
                    outerRadius={30}
                    barSize={2}



                    data={
                        result.slice(0, 4).map((item, idx) => {
                            return { ...item, fill: Data[idx].fill }
                        })}


                >


                    <RadialBar

                        label={{ position: "insideStart" }}
                        background
                        //  clockWise
                        dataKey="balance"

                    />

                    <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="radial"
                        verticalAlign="middle"
                        wrapperStyle={style}

                    >

                    </Legend>

                </RadialBarChart>

                <Box marginTop="300px" textAlign="center" >
                    <Typography className="text-[15px] text-[#383874] font-semibold	">32.0%</Typography>
                    <Typography className="text-[15px] text-[#383874] font-semibold	">44.0%</Typography>
                    <Typography className="text-[15px] text-[#383874] font-semibold	">16.0%</Typography>
                    <Typography className="text-[15px] text-[#383874] font-semibold	">8.0%</Typography>
                </Box>

            </Box>



        </React.Fragment>

    );
}
