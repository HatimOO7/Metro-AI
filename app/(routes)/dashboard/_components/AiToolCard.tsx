import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

export interface TOOL{
    name: string;
    desc: string;
    icon: string;
    button: string;
    path : string;
}

type AIToolProps = {
    tool: TOOL;
}

function AiToolCard({tool}:AIToolProps ) {
  return (
    <div className='p-3 border rounded-lg'>
            <Image src={tool.icon} width={40} height={40} alt='tool.name'/>
            <h2 className='font-bold mt-2'>{tool.name}</h2>
            <p className='text-gray-400'>{tool.desc}</p>
            <Link href={tool.path} className='text-blue-500 hover:underline'>
            <Button className='w-full mt-3'>{tool.button}</Button> 
            </Link>

    </div>
  )
}

export default AiToolCard
