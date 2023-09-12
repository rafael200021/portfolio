import { Dialog } from 'primereact/dialog'
import React, { useEffect, useRef, useState } from 'react'
import { IProjeto } from '../Interfaces/IProjeto'
import Badge from './Badge';

interface ModalProps {
    isVisivel: boolean,
    setIsVisivel: React.Dispatch<React.SetStateAction<boolean>>,
    projeto: IProjeto

}


export default function Modal({ isVisivel, setIsVisivel, projeto }: ModalProps) {

    const [imagemAtual, setImagemAtual] = useState<string>("");
    const numeroAtual = useRef(0);

    useEffect(() => {
        if (projeto.imagens && imagemAtual == "") {
            setImagemAtual(projeto.imagens[0]);
        }
        const intervalId = setInterval(() => {
            if (projeto.imagens) {

                setImagemAtual(projeto.imagens[numeroAtual.current]);

                if (numeroAtual.current + 1 >= projeto.imagens.length) {
                    numeroAtual.current = 0;
                } else {
                    numeroAtual.current = numeroAtual.current + 1;
                }
            }
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);


    return (
        <Dialog visible={isVisivel} style={{ width: '80vw', height: '100vh' }} onHide={() => setIsVisivel(false)}>
            <div className='flex flex-row h-full gap-4'>
                <div className='hidden relative lg:flex rounded w-2/4 h-full'>
                    {projeto.imagens &&
                        <img src={imagemAtual} alt={projeto.titulo} className='w-full h-full object-contain  ' />
                    }
                    <div className='absolute bottom-4 flex w-full justify-center items-center gap-2'>
                        {
                            projeto.imagens &&
                            projeto.imagens.map((projetoAtual, index) => {
                                return <div key={index} onClick={() => { setImagemAtual(projetoAtual); numeroAtual.current = index }} className='rounded-full cursor-pointer bg-purple-500  transition-all hover:bg-white h-5 w-5 z-1000'></div>
                            })
                        }
                    </div>
                </div>
                <div className='w-full lg:w-2/4 flex flex-col justify-between'>
                    <div>
                        <h1 className='text-purple-500 font-bold  text-3xl'>{projeto.titulo}</h1>
                        <div className='flex flex-wrap gap-4 mt-2'>
                            {projeto.linguagens?.map((linguagem, index) => {
                                return <Badge key={index}>{linguagem}</Badge>
                            })}
                        </div>
                        <p className='mt-4'>{projeto.descricao}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <a href={projeto.link} target='_blank' className='w-full text-center rounded-full bg-purple-500 hover:bg-white transition-colors hover:text-purple-500 border border-purple-500 text-white p-4 text-lg font-bold'>Saiba Mais</a>
                    </div>
                </div>
            </div>
        </Dialog>)
}
