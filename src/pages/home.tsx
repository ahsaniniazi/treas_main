
import * as React from 'react';


export default function Heading() {
    return (


        <>
            <div className='flex flex-row justify-between w-[1500px] text-center	'>
                <div className='flex ml-[70px] '>
                    <p className='text-[25px] font-[Libre_Baskerville] '>Holdings details</p>
                </div>
                <div className='flex mt-[20px]'>
                    <p className='font-[19px] mr-[10px] pb-[10px]'>Holdings variation</p>
                    <div className='flex'>
                        <img src="image/UP ARROW.svg" alt="" className='h-[20px] mr-[5px]' />
                        <p className='text-[#53A57C]'>
                            +1,54%
                        </p>
                    </div>
                    <select className='w-[50px] border-none '>
                        <img src="image/DOWN ARROW SM.svg" alt="" className='h-[9px] w-[9px] mr-[5px] color-[]' />
                        <option >1w</option>
                        <option >1d</option>
                        <option >1m</option>
                        <option >6m</option>
                        <option >1y</option>
                    </select>
                </div>

            </div></>

    );
}
