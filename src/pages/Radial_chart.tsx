import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Legend, RadialBar, RadialBarChart } from "recharts";
import Web3 from "web3";
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");


const Data = [
    {
        name: "BTC",
        uv: 32,
        fill: "purple",
        bj: "green"
    },
    {
        name: "ETH",
        uv: 44.0,
        fill: "#fd7e14",
        bj: "yellow"

    },
    {
        name: "USDT",
        uv: 16.0,
        fill: "#45B39D",
        bj: "pink"

    },
    {
        name: "Other",
        uv: 8.0,
        fill: "#dc3545",
        bj: "indigo"

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

    let address = router?.query.id;

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


            const isFind = priceData.find((tokenPrice: any) => tokenPrice.symbol === token.symbol)
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
    }, [router?.query.id])

    return (
        <React.Fragment>
            <Box sx={{ display: "flex", direction: "column" }}>

                <RadialBarChart
                    width={250}
                    height={300}
                    cx={130}
                    cy={150}
                    innerRadius={125}
                    outerRadius={70}
                    barSize={1.5}
                    data={
                        result.slice(0, 4).map((item: any, idx: number) => {
                            return { ...item, fill: Data[idx].fill }
                        })}

                >

                    <RadialBar

                        label={{ position: "insideStart", fill: "transparent" }}
                        // background={result.slice(0, 4).map((item: any, idx: number) => {
                        //     return { ...item, fill: Data[idx].fill }
                        // })}
                        // clockWise
                        dataKey="balance"
                        fill="balance"
                        background={{
                            fill: Data[2].bj
                            // Data.length == 1 ? Data[0].bj : Data.length == 2 ?
                            //     Data[0].bj && Data[1].bj : Data.length == 3 ? Data[0].bj && Data[1].bj && Data[2].bj
                            //         : Data[0].bj && Data[1].bj && Data[2].bj && Data[3].bj
                        }}

                    />
                    <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="vertical"
                        verticalAlign="middle"
                        wrapperStyle={style}

                    >

                    </Legend>

                </RadialBarChart>

                <Box marginTop="300px" textAlign="center" >
                    <Typography sx={{ color: "#383874", fontSize: "15px", fontWeight: "600" }}>32.0%</Typography>
                    <Typography sx={{ color: "#383874", fontSize: "15px", fontWeight: "600" }}>44.0%</Typography>
                    <Typography sx={{ color: "#383874", fontSize: "15px", fontWeight: "600" }}>16.0%</Typography>
                    <Typography sx={{ color: "#383874", fontSize: "15px", fontWeight: "600" }}>8.0%</Typography>
                </Box>

            </Box>



        </React.Fragment>

    );
}
