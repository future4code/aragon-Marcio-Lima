import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../global/GlobalState"
import logo from "../assets/logo.png"
import { SelectGame } from "../components/SelectGame"
import { Footer } from "../components/Footer"
import { Main, SectionLeft, SectionRight, NumberList, Title } from "./styles"

export const Quina = () => {
    const context = useContext(GlobalContext)
    const { concurso, loteriasConcursos, colorPage } = context.states
    const { getConcurso } = context.getters

    useEffect(() => {
        const [idConcurso] = loteriasConcursos?.filter(
            (loteria) => loteria.loteriaId === 1
        )
        getConcurso(idConcurso?.concursoId)
    }, [])

    const data = new Date(concurso?.data).toLocaleDateString()
    const numeros = concurso.numeros?.map((numero) => <li>{numero}</li>)

    return (
        <Main>
            <SectionLeft
                style={{ background: colorPage, transition: "background 1s" }}
            >
                <SelectGame />
                <Title>
                    <img src={logo} alt="logo-CEF" width={50} />
                    <span>QUINA</span>
                </Title>
                <Footer concursoId={concurso.id} data={data} />
            </SectionLeft>
            <SectionRight>
                <NumberList>{numeros}</NumberList>
                <span>
                    Este sorteio é meramente ilustrativo e não possui nenhuma ligação
                    com a CAIXA.
                </span>
            </SectionRight>
        </Main>
    )
}
