import { GlobalContext } from "../global/GlobalState"
import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
    goToDiaDeSorte,
    goToLotofacil,
    goToLotomania,
    goToMegasena,
    goToQuina,
    goToTimemania,
} from "../routes/coordinator"
import { colors } from "../utils/colors"

export const SelectGame = () => {
    const navigate = useNavigate()

    const context = useContext(GlobalContext)

    const { loterias, loteriaSelecionada } = context.states
    const { getLoterias, getLoteriasConcursos } = context.getters
    const { setLoteriaSelecionada, setColorPage } = context.setters

    useEffect(() => {
        getLoterias()
        getLoteriasConcursos()
    }, [])

    const gameOptions = loterias.map((loteria) => {
        return (
            <option key={loteria.id} value={loteria.nome}>
                {loteria.nome.toUpperCase()}
            </option>
        )
    })

    const prizeDraw = (e) => {
        setLoteriaSelecionada(e.target.value)
        switch (e.target.value) {
            case "mega-sena":
                setColorPage(colors.megaSena)
                return goToMegasena(navigate)
            case "quina":
                setColorPage(colors.quina)
                return goToQuina(navigate)
            case "lotofácil":
                setColorPage(colors.lotofacil)
                return goToLotofacil(navigate)
            case "lotomania":
                setColorPage(colors.lotomania)
                return goToLotomania(navigate)
            case "timemania":
                setColorPage(colors.timemania)
                return goToTimemania(navigate)
            case "dia de sorte":
                setColorPage(colors.diaDeSorte)
                return goToDiaDeSorte(navigate)
            default:
                return goToMegasena(navigate)
        }
    }

    return (
        <main>
            <select onChange={prizeDraw} value={loteriaSelecionada}>
                {gameOptions}
            </select>
        </main>
    )
}
