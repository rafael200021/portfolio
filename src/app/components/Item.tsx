import React, { useState } from 'react'
import { IProjeto, } from '../Interfaces/IProjeto';
import Badge from './Badge';
import Image from 'next/image'

interface ItemProps {
    projeto: IProjeto
    setConteudoModal: React.Dispatch<React.SetStateAction<IProjeto>>,
    setIsVisivel: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Item({ projeto, setConteudoModal, setIsVisivel }: ItemProps) {

    return (
        <div className='border rounded-lg gap-2'>
            <div className='w-full border'>
                {projeto.imagens &&
                    <img src={projeto.imagens[0]} alt={projeto.titulo} className='w-full h-64 object-cover ' />
                }
            </div>
            <div className='px-14 py-10 min-h-[400px] flex flex-col justify-between'>
                <div>
                    <h2 className='text-lg font-bold text-gray-800'>{projeto.titulo}</h2>
                    <div className='flex flex-wrap gap-4 mt-2'>
                        {projeto.linguagens?.map((linguagem, index) => {
                            return <Badge key={index}>{linguagem}</Badge>
                        })}
                    </div>
                    <p className='text-sm text-gray-500 text-justify mt-4'>{projeto.descricao?.slice(0, 120) + ' ...'}</p>
                </div>
                <div className='flex justify-end mt-10'>
                    <button type='button' className=' text-white w-full bg-purple-500 py-3 px-6 rounded-full font-bold hover:bg-white hover:text-purple-500 border hover:border-purple-500 transition-colors' onClick={() => { setIsVisivel(true); setConteudoModal(projeto) }}>Saiba Mais</button>
                </div>
            </div>
        </div>
    )
}
