import { UploadFile } from "@mui/icons-material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Container, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
    Bar, ComposedChart,
    Line, Tooltip,
    XAxis
} from "recharts";
import RAdial from "./Radial_chart";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 595,
    bgcolor: 'background.paper',
    border: "border-solid border-1 #979797",
    pt: 2,
    px: 4,
    pb: 3,
};
interface ArrProps {
    inflow: number,
    outflow: number,
    month: string,
    value: number,
    fees: number,
}
export default function Chart() {
    const [dateresult, setDateresult] = React.useState<ArrProps[]>([]);
    const [openhistory, setHistory] = React.useState(false);

    const router = useRouter()
    // console.log(router?.query.id || "hahah")

    const handleHistory = () => {
        setHistory(true);
    };

    const handleClose = () => {
        setHistory(false)

    };

    const handleSubmit = async () => {
        const query = new URLSearchParams({ pageSize: "50", offset: "5" }).toString();
        // const address = localStorage.getItem("data")

        let address = router?.query.id;

        const resp = await fetch(
            `https://api.tatum.io/v3/ethereum/account/transaction/internal/${address}?${query}`,
            {
                method: "GET",
                headers: {
                    "x-api-key": "32813fbc-a6c7-40c7-b71e-e53d0eef4fd8",
                },
            }
        );

        const jsonn = await resp.json();
        const result = await jsonn;
        console.log("result");
        const arr: ArrProps[] = [];
        // console.log(arr);
        const getValues = (data: { [val: string]: string }, month: string) => {
            console.log({ data });
            const idx = arr.findIndex((item) => item.month === month);
            const add = Number(address);

            if (idx === -1) {
                arr.push({
                    inflow: Number(data.to) === add ? Number(data.value) : 0,
                    outflow: Number(data.from) === add ? Number(data.value) : 0,
                    month,
                    value: Number(data.value),
                    fees: Number(data.gas),
                });

            } else {
                if (arr.length) {
                    // console.log(data.from, Number(data.to) === add);
                    if (Number(data.from) === add) arr[idx].outflow += Number(data.value);
                    else if (Number(data.to) === add) {
                        // console.log(address);
                        arr[idx].inflow += Number(data.value);
                        console.log(arr)
                    } else {
                        // console.log(address);
                        arr[idx].fees += Number(data.value);
                    }
                }
            }
        };
        console.log(result)
        const monthNames = [
            "January ",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        result.forEach((data: { [val: string]: any }) => {
            const time = data.timeStamp;
            const d = new Date();

            d.setTime(time * 1000);

            const month = monthNames[d.getMonth()];

            getValues(data, month);
        });

        setDateresult(arr)

    };


    React.useEffect(() => {

        handleSubmit();

    }, [router?.query.id]);
    console.log(dateresult)
    return (
        <React.Fragment>

            <Box marginBottom={2} display="flex">

                <RAdial />
                <Container>
                    <Box display="flex" justifyContent="space-between" >
                        <Box >
                            <Typography className="font-medium text-[22px]" > 1496,518 $US </Typography>
                            <Typography className="font-medium text-[12px] text-[#979797]">10 nov. 2022, 0
                                3:24</Typography>
                        </Box>
                        <Box marginRight={5} display="flex" justifyContent="space-between">
                            <Box className='rotate-[-7.12deg]  bg-[#C2EED8] 
                         h-[27px]  w-[56px] '>
                                <Typography

                                    gutterBottom
                                    variant="h5"
                                    className='text-[21px] font-normal text-[#000000] 
                                font-[Libre Baskerville] sticky rotate-[7.12deg] pt-[2px]'
                                >
                                    treas
                                </Typography>
                            </Box>
                            <Typography
                                variant="h5"
                                className='pl-[0px] mx-[10px]  font-[Libre Baskerville] font-normal text-[#000000] text-[21px]'>
                                export </Typography>
                            <Typography></Typography>
                            <UploadFile onClick={handleHistory} ></UploadFile>
                        </Box>
                        <Modal
                            open={openhistory}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                            className='bg-[#ffffffe6]'

                        >
                            <Box sx={{ ...style, width: 700, height: 500 }} borderColor="#979797">
                                <Box border="1px"
                                    position="absolute" top="-22px" right="-20px" >
                                    <Image src="image/back icon.svg" alt="Fund me" width={40} height={40} onClick={handleClose}
                                        className="bg-[#fff] border rounded-full relative border-[#979797] px-[5px] py-[5px]" />
                                </Box>
                                <Box display="flex" flexDirection="row" marginLeft={20} marginBottom={5}>
                                    <Typography className='text-[34px] pt-[45px] pl-[45px] flex '>
                                        treas export
                                        <Typography className="ml-[20px] mt-[8px]"> <UploadFile /> </Typography>
                                    </Typography>

                                </Box>
                                <Typography className='text-[30px] pt-[12px] pl-[45px] text-[#64626A]'>
                                    Export your treas
                                </Typography>

                                <Typography className='text-[20px] pl-[45px] text-[#64626A]'>
                                    If you want to scan other blockchains, add and manage multiple wallets create your account for free.
                                </Typography>

                                <Typography className='text-[18px] pl-[45px] pt-[20px] text-[#FF6846]'>
                                    Create your treas
                                    <KeyboardArrowRightIcon className='text-[#FF6846]' onClick={handleClose} />
                                </Typography>


                            </Box>
                        </Modal>
                    </Box>

                    <ComposedChart
                        // width={860}
                        width={950}
                        height={400}
                        data={dateresult}
                        margin={{
                            top: 20,

                        }}
                    >
                        <Tooltip />
                        <XAxis dataKey="month" scale="auto" />
                        <Bar dataKey="inflow" barSize={30} fill="#C2EED8" />
                        <Bar dataKey="outflow" barSize={30} fill="#FF9781" />
                        <Line type="monotone" dataKey="inflow" stroke="#000000" strokeWidth={3} />
                    </ComposedChart>
                </Container>
            </Box >
        </React.Fragment >
    );
}


