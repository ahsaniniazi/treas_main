import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { handleSubmit } from './Date_fetch';

function createData(
    color: string,
    background: string,
    Network: string,
    JUL: string,
    AUG: string,
    SEPT: string,
    OCT: string,
    NOV: string,
    DEC: string,
    JAN: string,
    FEB: string,
    MAR: string,

) {
    return { color, background, Network, JUL, AUG, SEPT, OCT, NOV, DEC, JAN, FEB, MAR };
}

function Row({ row }: any) {
    return (
        <React.Fragment>


            <TableCell sx={{ backgroundColor: "#F5F6F9" }} align="center" className=' pb=[20px] text-[18px]
             font-medium text-[#000000] w-[100px] h-[40px] mt-[10px] 
             border-[#D1D0D6] border-y rounded-md'>

                <Typography className=" text-[18px] font-thin text-[#000000]">
                    {row !== "" ? row : "-"}
                </Typography>
            </TableCell>



        </React.Fragment>
    );
}

const rows = [

    createData(
        "#000", "#F5F6F9", "treas beg. of the month", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#53A57C", "#F5F6F9", "Inflows", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#FF6846", "#F5F6F9", "OutFlows", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#000", "#F5F6F9", "treas End of the month", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#979797", "#F5F6F9", "Total Fees", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("#53A57C", "", "Inflows", '', "", "", "", "",
        "", "", "", ""),
    createData("", "", "Total Transactions", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),
    createData("", "", "Total Contacts", '123,434', "123,434", "123,434", " 123,434", "123,434",
        "123,434", "123,434", "123,434", "123,434"),

]
export default function DenseTable() {


    function convertToInternationalCurrencySystem(props: number) {

        // Nine Zeroes for Billions
        return Math.abs(Number(props)) >= 1.0e+12

            ? (Math.abs(Number(props)) / 110e+12).toFixed(1) + "T"
            // Six Zeroes for Millions 
            : Math.abs(Number(props)) >= 1.0e+9

                ? (Math.abs(Number(props)) / 1.0e+9).toFixed(1) + "B"
                // Six Zeroes for Millions 
                : Math.abs(Number(props)) >= 1.0e+6

                    ? (Math.abs(Number(props)) / 1.0e+6).toFixed(1) + "M"
                    // Three Zeroes for Thousands
                    : Math.abs(Number(props)) >= 1.0e+3

                        ? (Math.abs(Number(props)) / 1.0e+3).toFixed(1) + "K"

                        : Math.abs(Number(props));
    }

    const [age, setAge] = React.useState('');
    const [result, setResult] = React.useState<any>();

    const router = useRouter()
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const retrive = async (id: string) => {

        const data = await handleSubmit(id).then((response) => { return response })
        setResult(data)
        console.log(data)
    }

    React.useEffect(() => {

        const id: any = router.query.id;
        retrive(id);

    }, [router?.query.id]);

    return (
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead sx={{ paddingLeft: "0px" }}>
                <TableRow sx={{ m: 1, lineHeight: 8 }}
                >
                    <TableCell sx={{ borderBottom: "0", padding: "0", width: "290px" }} className=' text-[#D1D0D6] border-solid rounded-md bb-[0px]'>

                        <FormControl sx={{ minWidth: 270 }}>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}




                            >
                                <MenuItem value="" >
                                    <Box display="flex" flexDirection="row">
                                        <Image src="image/image 117.svg" alt='' width={24} height={24} />
                                        <Typography marginLeft="10px"> All Networks </Typography>
                                    </Box>
                                </MenuItem>
                                <MenuItem sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700" }} value={10} >

                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > All Networks </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > 1223,3 $US </Typography>
                                </MenuItem>
                                <MenuItem sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700" }} value={20} >
                                    <Image src="image/currency_icon/Ethereum.svg" alt="fun me" width={30} height={30} />
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > Etehreum </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > 1223,3 $US </Typography>
                                </MenuItem>
                                <MenuItem sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700" }} value={20}>
                                    <Image src="image/currency_icon/BSC.svg" alt="fun me" width={30} height={30} />
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > BSC </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > 1223,3 $US </Typography>
                                </MenuItem>
                                <MenuItem sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700" }} value={40}>
                                    <Image src="image/currency_icon/Moonriver.svg" alt="fun me" width={30} height={30} />
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > Moonriver </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > 1223,3 $US </Typography>
                                </MenuItem>

                                <MenuItem sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700" }} value={50} >
                                    <Image src="image/currency_icon/Polygon.svg" alt="fun me" width={30} height={30} />
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > Polygon </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > 1223,3 $US </Typography>
                                </MenuItem>
                                <MenuItem sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700" }} value={60} >
                                    <Image src="image/currency_icon/Avalanche.svg" alt="fun me" width={30} height={30} />
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > Avalanche </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > 1223,3 $US </Typography>
                                </MenuItem>
                                <MenuItem sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700" }} value={70} >
                                    <Image src="image/currency_icon/Fantom.svg" alt="fun me" width={30} height={30} />
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > Fantom </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > 1223,3 $US </Typography>
                                </MenuItem>
                                <MenuItem sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700" }} value={80} >
                                    <Image src="image/currency_icon/Arbitrum.svg" alt="fun me" width={30} height={30} />
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > Arbitrum </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > 1223,3 $US </Typography>
                                </MenuItem>
                                <MenuItem sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700" }} value={90} >
                                    <Image src="image/currency_icon/Gnosis Chain.svg" alt="fun me" width={30} height={30} />
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > Gnosis Chain </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > 1223,3 $US </Typography>
                                </MenuItem>
                                <MenuItem sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700" }} value={99} >
                                    <Image src="image/currency_icon/Aurora.svg" alt="fun me" width={30} height={30} />
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    >Aurora</Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}
                                    > 1223,3 $US </Typography>
                                </MenuItem>
                            </Select>
                        </FormControl>

                    </TableCell>

                    {/* {
                            result?.map((data, id:number) => (

                                <TableCell align='center' key={idx} className='border-y border-solid border-[#000000]'
                                    sx={{ m: 1, minWidth: 90 }}
                                >{data.month}</TableCell>
                            ))
                        } */}


                </TableRow>
            </TableHead>
            <TableBody className='leading-8'>

                <TableRow sx={{ display: "flex", marginBottom: "8px" }}>

                    <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                        sx={{ background: "#F5F6F9", display: "flex" }} >
                        <Box sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#000" }}
                            marginRight="18px" >
                        </Box>
                        <Typography>{rows[0]?.Network}</Typography>
                    </TableCell>


                    {
                        result?.length && result?.map((row: any, id: number) => (
                            <Row
                                key={row.name}
                                row={""}
                            />
                        ))}


                </TableRow>
                <TableRow sx={{ display: "flex", marginBottom: '8px' }}>

                    <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px] w-[290px] rounded-md'
                        sx={{ background: "#F5F6F9", display: "flex" }}
                    >
                        <Typography sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#53A57C" }}
                            marginRight="18px" >
                        </Typography>
                        <Typography >{(rows[1].Network)}</Typography></TableCell>

                    {

                        result?.length && result?.map((row: any) => (
                            <Row
                                key={row.name}
                                row={convertToInternationalCurrencySystem(row?.inflow)}
                            />
                        ))
                    }


                </TableRow>
                <TableRow sx={{ display: "flex", marginBottom: '8px' }}>

                    <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                        sx={{ background: "#F5F6F9", display: "flex" }}>
                        <Typography sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#FF6846" }}
                            marginRight="18px" >
                        </Typography>
                        <Typography>{rows[2].Network}</Typography></TableCell>

                    {
                        result?.length && result?.map((row: any) => (
                            <Row
                                key={row.name}
                                row={convertToInternationalCurrencySystem(row?.outflow)}
                            />
                        ))}

                </TableRow>
                <TableRow sx={{ display: "flex", marginBottom: '8px' }}>

                    <TableCell align="left" className=' border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                        sx={{ background: "#F5F6F9", display: "flex" }}>
                        <Typography sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#000" }}
                            marginRight="18px" >
                        </Typography>
                        <Typography>{rows[3].Network}</Typography></TableCell>

                    {
                        result?.length && result?.map((row: any) => (
                            <Row
                                key={row.name}
                                row={""}
                            />
                        ))}

                </TableRow>
                <TableRow sx={{ display: "flex", marginBottom: '8px' }}>


                    <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                        sx={{ background: "#F5F6F9", display: "flex" }}>
                        <Typography sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#979797" }}
                            marginRight="18px" >
                        </Typography>
                        <Typography >{rows[4].Network}</Typography></TableCell>


                    {
                        result?.length && result?.map((row: any) => (
                            <Row
                                key={row.name}
                                row={row?.fees}
                            />
                        ))}

                </TableRow>
                <TableRow sx={{ display: "flex", marginBottom: '8px' }}>


                    <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                        sx={{ background: "#F5F6F9", display: "flex" }}>
                        <Typography sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#53A57C" }}
                            marginRight="18px" >
                        </Typography>
                        <Typography>{rows[5].Network}</Typography></TableCell>


                    {
                        result?.length && result?.map((row: any) => (

                            <Row
                                key={row.name}
                                row={""}
                            />


                        ))}

                </TableRow>
                <TableRow sx={{
                    display: "flex", marginBottom: '8px'
                }}>

                    < TableCell align="left" className='flex border-x border-y 
                            border- solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                        sx={{ display: "flex" }}>
                        <Typography sx={{ width: "25px", height: "25px", borderRadius: "5px" }}
                            marginRight="18px" >
                        </Typography>
                        <Typography>{rows[6].Network}</Typography></TableCell>

                    {
                        result?.length && result?.map((row: any) => (
                            <Row
                                key={row.name}
                                row={""}
                            />
                        ))}

                </TableRow >
                <TableRow sx={{ display: "flex", marginBottom: '8px' }}>

                    <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                        sx={{ display: "flex" }}>
                        <Typography sx={{ width: "25px", height: "25px", borderRadius: "5px" }}
                            marginRight="18px" >
                        </Typography>
                        <Typography >{rows[7].Network}</Typography></TableCell>

                    {
                        result?.length && result?.map((row: any) => (
                            <Row
                                key={row.name}
                                row={""}
                            />
                        ))}

                </TableRow>
            </TableBody >
        </Table >

    );
}