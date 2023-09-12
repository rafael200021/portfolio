import React from 'react'
export default function HabilidadesIdiomas() {
    return (
        <div className='grid  grid-cols-1 h-full justify-center items-center lg:grid-cols-3 gap-8'>
            <div className='text-center'>
                <p className='text-lg font-bold mt-4'>Brazilian Portuguese</p>
                <p className='text-[12px] font-normal'>Fluent</p>
            </div>
            <div className='text-center'>
                <p className='text-lg font-bold mt-4'>English</p>
                <p className='text-[12px] font-normal'>Intermediate</p>
            </div>
            <div className='text-center'>
                <p className='text-lg font-bold mt-4'>French</p>
                <p className='text-[12px] font-normal'>Basic</p>
            </div>
        </div>
    )
}
