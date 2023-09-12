'use client'
import React, { useState } from 'react'
import Modal from '../components/Modal';
import { IProjeto } from '../Interfaces/IProjeto';
import Item from '../components/Item';



export default function Projetos() {
    const [conteudoModel, setConteudoModal] = useState<IProjeto>({});
    const [isVisivel, setIsVisivel] = useState<boolean>(false);


    const projetos: IProjeto[] = [
        {
            titulo: "Favorite Seu Pet",
            descricao: "This is a basic application, where the user can favorite their favorite animals, search for animals in the search field and filter the animals by category.",
            imagens: ["./images/Projeto1/pagina1.png", "images/Projeto1/pagina2.png"],
            linguagens: ["React", "Typescript", "Sass"],
            tipo: "Front-End",
            link: "https://github.com/rafael200021/favorite_seu_pet",
        },
        {
            titulo: "Memorização de Flashcard",
            descricao: "I like studying languages, so I created this app to help me learn more languages ​​and also study React. This app was made using React, Typescript, Tailwind CSS and daisyUI.",
            imagens: ["./images/Projeto2/pagina1.png", "images/Projeto2/pagina2.png", "images/Projeto2/pagina3.png", "images/Projeto2/pagina4.png"],
            linguagens: ["React", "Typescript", "Tailwind CSS", "daisyUI"],
            tipo: "Front-End",
            link: "https://github.com/rafael200021/memorizacao-flashcard-app"
        },
        {
            titulo: "Memorizacao de FlashCard API",
            descricao: "This project was made to provide a REST API for Memorizacao FlashCard App. I used in this project Node.js with Express and Sequelize.",
            imagens: ["./images/Projeto3/pagina1.png",],
            linguagens: ["Node.js", "Express", "Sequelize"],
            tipo: "Back-End",
            link: "https://github.com/rafael200021/memorizacao-flashcard-api"
        },

    ];

    return (
        <div className='p-10'>
            <h1 className='text-purple-500 font-bold text-2xl'>Projects</h1>
            {isVisivel && <Modal projeto={conteudoModel} isVisivel={isVisivel} setIsVisivel={setIsVisivel} />}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                {projetos.map((projeto, index) => {
                    return <Item key={index} projeto={projeto} setConteudoModal={setConteudoModal} setIsVisivel={setIsVisivel} />
                })}

            </div>
        </div>
    )
}
