'use client'
import React, { useEffect, useState } from 'react'
import HabilidadeItem from '../components/HabilidadeItem'
import HabilidadesProgramacao from './components/HabilidadesProgramacao';
import HabilidadesIdiomas from './components/HabilidadesIdiomas';

export default function Habilidades() {

    const [habilidade, setHabilidade] = useState(1);

    return (
        <main className="flex flex-col lg:h-full h-max justify-center items-center w-full px-10 py-20 lg:p-20">
            <div className='w-full flex lg:flex-row flex-col text-neutral-500  text-sm justify-center items-center gap-5 mb-10'>
                <button onClick={() => setHabilidade(1)} className='border p-4 font-bold rounded-lg hover:bg-purple-500 w-52 hover:text-white duration-300 transition-all'>Programming Languages</button>
                <button onClick={() => setHabilidade(2)} className='border p-4 font-bold rounded-lg hover:bg-purple-500 w-52 hover:text-white duration-300 transition-all'>Languagues</button>
            </div>
            <div className="flex flex-col lg:flex-row mt-20 gap-20">
                <div className='w-full lg:w-2/4'>
                    <h1 className='text-purple-500 font-bold text-5xl'>Skills</h1>
                    <p className='mt-10 text-gray-400'>Currently, my focus has been on improving skills in web systems development. In this regard, I&apos;ve been delving deep into the React library for front-end development, while for back-end development, I&apos;ve been opting for the Django framework. Lastly, I&apos;m using Flutter for mobile application development.</p>

                </div>

                <div className='w-full lg:w-2/4 font-bold text-purple-500 items-center flex flex-col '>

                    {habilidade == 1 ? <HabilidadesProgramacao /> : <HabilidadesIdiomas />}

                </div>
            </div>

        </main>
    )
}
