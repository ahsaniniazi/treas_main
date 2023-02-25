import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import Image from 'next/image';
import { handleSubmit } from './Date_fetch';
import { useRouter } from 'next/router';

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
             font-medium text-[#000000] w-[290px] h-[40px] mt-[10px] border border-x bordey-y
              border-[#D1D0D6] ml-[2px] mr-[2px] rounded-md'>

                <Typography className="p-[0px] text-[18px] font-thin text-[#000000]">
                    {row}
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

    const [age, setAge] = React.useState('');
    const [result, setResult] = React.useState<any>();

    const router = useRouter()
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const retrive = async (id) => {

        const data = await handleSubmit(id).then((response) => { return response })
        setResult(data)
        console.log(data)
    }

    React.useEffect(() => {
        if (router.query.id) {
            retrive(router.query.id);
        }
    }, [router?.query.id]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow sx={{ m: 1, lineHeight: 8 }}
                    >
                        <TableCell sx={{ borderBottom: "0" }} className='pl-[0px] pr-[20px] text-[#D1D0D6] w-[290px] border-solid rounded-md bb-[0px]'>

                            <FormControl sx={{ minWidth: 270 }}>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}




                                >
                                    <MenuItem value="" >
                                        <Typography display="flex"> <Image src="image/image 117.svg" alt='' width={24} height={24} />
                                            <Typography marginLeft="10px"> All Networks </Typography>
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem value={10} className="text-[12px] text- flex justify-between ">

                                        <Typography className='text-[14px] font-bold'> All Networks </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={20} className="text-[12px] flex justify-between font-bold">
                                        <Image src="image/currency_icon/Ethereum.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Etehreum </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={20} className="text-[12px] flex justify-between font-bold">
                                        <Image src="image/currency_icon/BSC.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> BSC </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={40} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Moonriver.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Moonriver </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>

                                    <MenuItem value={50} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Polygon.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Polygon </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={60} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Avalanche.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Avalanche </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={70} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Fantom.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Fantom </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={80} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Arbitrum.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Arbitrum </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={90} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Gnosis Chain.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'> Gnosis Chain </Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                    <MenuItem value={99} className="text-[12px] flex justify-between ">
                                        <Image src="image/currency_icon/Aurora.svg" alt="fun me" width={30} height={30} />
                                        <Typography className='text-[14px] font-bold'>Aurora</Typography>
                                        <Typography className='text-[14px] font-bold'> 1223,3 $US </Typography>
                                    </MenuItem>
                                </Select>
                            </FormControl>

                        </TableCell>

                        {/* {
                            result?.map((data, idx) => (

                                <TableCell align='center' key={idx} className='border-y border-solid border-[#000000]'
                                    sx={{ m: 1, minWidth: 90 }}
                                >{data.month}</TableCell>
                            ))
                        } */}


                    </TableRow>
                </TableHead>
                <TableBody className='leading-8'>

                    <TableRow >
                        <Typography display="flex" className='mb-[8px]'>
                            <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                                sx={{ background: "#F5F6F9" }} >
                                <Box sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#000" }}
                                    marginRight="18px" >
                                </Box>
                                <Typography>{rows[0].Network}</Typography></TableCell>


                            {
                                result?.length && result?.map((row) => (
                                    <Row
                                        key={row.name}
                                        row={""}
                                    />
                                ))}
                        </Typography>
                    </TableRow>
                    <TableRow >
                        <Typography display="flex" className='mb-[8px]'>
                            <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px] w-[290px] rounded-md'
                                sx={{ background: "#F5F6F9" }}
                            >
                                <Box sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#53A57C" }}
                                    marginRight="18px" >
                                </Box>
                                <Typography >{(rows[1].Network)}</Typography></TableCell>

                            {
                                result?.length && result?.map((row) => (
                                    <Row
                                        key={row.name}
                                        row={row?.inflow}
                                    />
                                ))}
                        </Typography>

                    </TableRow>
                    <TableRow >
                        <Typography display="flex" className='mb-[8px]'>
                            <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                                sx={{ background: "#F5F6F9" }}>
                                <Box sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#FF6846" }}
                                    marginRight="18px" >
                                </Box>
                                <Typography>{rows[2].Network}</Typography></TableCell>

                            {
                                result?.length && result?.map((row) => (
                                    <Row
                                        key={row.name}
                                        row={row?.outflow}
                                    />
                                ))}
                        </Typography>
                    </TableRow>
                    <TableRow >
                        <Typography display="flex" className='mb-[8px]'>
                            <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                                sx={{ background: "#F5F6F9" }}>
                                <Box sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#000" }}
                                    marginRight="18px" >
                                </Box>
                                <Typography>{rows[3].Network}</Typography></TableCell>

                            {
                                result?.length && result?.map((row) => (
                                    <Row
                                        key={row.name}
                                        row={""}
                                    />
                                ))}
                        </Typography>
                    </TableRow>
                    <TableRow >
                        <Typography display="flex" className='mb-[8px]'>

                            <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                                sx={{ background: "#F5F6F9" }}>
                                <Box sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#979797" }}
                                    marginRight="18px" >
                                </Box>
                                <Typography >{rows[4].Network}</Typography></TableCell>


                            {
                                result?.length && result?.map((row) => (
                                    <Row
                                        key={row.name}
                                        row={row?.fees}
                                    />
                                ))}
                        </Typography>
                    </TableRow>
                    <TableRow >
                        <Typography display="flex" className='mb-[8px]'>
                            <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                                sx={{ background: "#F5F6F9" }}>
                                <Box sx={{ width: "25px", height: "25px", borderRadius: "5px", backgroundColor: "#53A57C" }}
                                    marginRight="18px" >
                                </Box>
                                <Typography>{rows[5].Network}</Typography></TableCell>


                            {
                                result?.length && result?.map((row) => (

                                    <Row
                                        key={row.name}
                                        row={""}
                                    />


                                ))}
                        </Typography>
                    </TableRow>
                    <TableRow>
                        <Typography display="flex" className='mb-[8px]'>

                            <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                            >
                                <Box sx={{ width: "25px", height: "25px", borderRadius: "5px" }}
                                    marginRight="18px" >
                                </Box>
                                <Typography>{rows[6].Network}</Typography></TableCell>

                            {
                                result?.length && result?.map((row) => (
                                    <Row
                                        key={row.name}
                                        row={""}
                                    />
                                ))}
                        </Typography>
                    </TableRow>
                    <TableRow>
                        <Typography display="flex" className='mb-[12px]'>
                            <TableCell align="left" className='flex border-x border-y 
                            border-solid border-[#D3D3D3] text-left text-[13px] text-[#000]
                             font-semibold mt-[10px] mr-[10px]  w-[290px] rounded-md'
                            >
                                <Box sx={{ width: "25px", height: "25px", borderRadius: "5px" }}
                                    marginRight="18px" >
                                </Box>
                                <Typography >{rows[7].Network}</Typography></TableCell>

                            {
                                result?.length && result?.map((row) => (
                                    <Row
                                        key={row.name}
                                        row={""}
                                    />
                                ))}
                        </Typography>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    );
}