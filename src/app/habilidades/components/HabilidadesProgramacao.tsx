import HabilidadeItem from '@/app/components/HabilidadeItem'
import React, { useEffect, useState } from 'react'

export default function HabilidadesProgramacao() {


    const [nivelReact, setNivelReact] = useState(0);
    const [nivelHtml, setNivelHtml] = useState(0);
    const [nivelCss, setNivelCss] = useState(0);
    const [nivelJavascript, setNivelJavascript] = useState(0);
    const [nivelFlutter, setNivelFlutter] = useState(0);
    const [nivelPhp, setNivelPhp] = useState(0);
    const [nivelNode, setNivelNode] = useState(0);
    const [nivelPython, setNivelPython] = useState(0);
    const [nivelSql, setNivelSql] = useState(0);
    const [nivelVue, setNivelVue] = useState(0);
    const [nivelGit, setNivelGit] = useState(0);
    const [nivelNet, setNivelNet] = useState(0);
    const [nivelJava, setNivelJava] = useState(0);
    const [nivelC, setNivelC] = useState(0);
    const [nivelCSharp, setNivelCSharp] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setNivelHtml(90);
            setNivelCss(80);
            setNivelJavascript(80);
            setNivelReact(70);
            setNivelVue(70);
            setNivelSql(70);
            setNivelPhp(70);
            setNivelFlutter(70);
            setNivelNode(50);
            setNivelPython(50);
            setNivelCSharp(70);
            setNivelC(40);
            setNivelJava(30);
            setNivelGit(60);
            setNivelNet(70);
        }, 500);
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8'>

            <div className='w-full'>
                <HabilidadeItem nome='HTML' valor={nivelHtml} />
                <HabilidadeItem nome='CSS' valor={nivelCss} />
                <HabilidadeItem nome='Javascript' valor={nivelJavascript} />
                <HabilidadeItem nome='MySQL' valor={nivelSql} />
                <HabilidadeItem nome='React' valor={nivelReact} />
            </div>
            <div className='w-full'>
                <HabilidadeItem nome='Dart (Flutter)' valor={nivelFlutter} />
                <HabilidadeItem nome='Node' valor={nivelNode} />
                <HabilidadeItem nome='Python' valor={nivelPython} />
                <HabilidadeItem nome='PHP' valor={nivelPhp} />
                <HabilidadeItem nome='Vue' valor={nivelVue} />
            </div>
            <div className='w-full'>
                <HabilidadeItem nome='C#' valor={nivelCSharp} />
                <HabilidadeItem nome='C/C++' valor={nivelC} />
                <HabilidadeItem nome='Java' valor={nivelJava} />
                <HabilidadeItem nome='Git' valor={nivelGit} />
                <HabilidadeItem nome='.Net Core' valor={nivelNet} />
            </div>
        </div>
    )
}
