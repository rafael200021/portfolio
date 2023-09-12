import { ProgressBar } from 'primereact/progressbar'
import React from 'react'

interface HabilidadeItemProps {
    nome: string,
    valor: number
}

export default function HabilidadeItem({ valor, nome }: HabilidadeItemProps) {
    return (
        <div className='w-full lg:w-2/4 mt-2'>
            <p>{nome}</p>
            <ProgressBar value={valor} color='#A855F7' ></ProgressBar>
        </div>
    )
}
