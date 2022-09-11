import axios from "axios"
import React, { createContext, useEffect, useState } from "react"
import { BASE_URL } from "../constants/urls"
import { colors } from "../utils/colors"

export const GlobalContext = createContext()

export const GlobalState = (props) => {
    const [loterias, setLoterias] = useState([])
    const [concurso, setConcurso] = useState([])
    const [loteriasConcursos, setLoteriasConcursos] = useState([])
    const [loteriaSelecionada, setLoteriaSelecionada] = useState("megasena")
    const [colorPage, setColorPage] = useState(colors.megaSena)

    async function getLoterias() {
        await axios
            .get(`${BASE_URL}/loterias`)
            .then((res) => setLoterias(res.data))
            .catch((err) => console.log(err))
    }

    async function getLoteriasConcursos() {
        await axios
            .get(`${BASE_URL}/loterias-concursos`)
            .then((res) => setLoteriasConcursos(res.data))
            .catch((err) => console.log(err))
    }

    async function getConcurso(id) {
        await axios
            .get(`${BASE_URL}/concursos/${id}`)
            .then((res) => setConcurso(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getLoterias()
        getLoteriasConcursos()
    }, [])

    const states = {
        loterias,
        concurso,
        loteriasConcursos,
        loteriaSelecionada,
        colorPage,
    }

    const setters = {
        setLoterias,
        setConcurso,
        setLoteriasConcursos,
        setLoteriaSelecionada,
        setColorPage,
    }

    const getters = {
        getLoterias,
        getConcurso,
        getLoteriasConcursos,
    }

    return (
        <GlobalContext.Provider value={{ states, getters, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
