"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function History() {
    const [userHistory, setUserHistory] = useState([]);
    return (
        <div className='mt-5 p-5 border rounded-xl'>
            <h2 className='font-bold text-lg'>Previous History</h2>
            <p className=''>What Your Previously work on, You can find here.</p>

            {userHistory?.length == 0 && 
                <div className='flex items-center justify-center mt-6 flex-col'>
                    <Image src={'/idea.png'} alt='bulb' width={50} height={50}/>
                    <h2> You do not have any history</h2> 
                    <Button className='mt-5'>Explore AI Tools</Button>
                </div> 
                }
        </div>
    )    
}

export default History