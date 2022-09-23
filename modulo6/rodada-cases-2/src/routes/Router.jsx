import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DiaDeSorte } from "../pages/DiaDeSorte"
import { Error } from "../pages/Error"
import { Lotofacil } from "../pages/Lotofacil"
import { Lotomania } from "../pages/Lotomania"
import { MegaSena } from "../pages/MegaSena"
import { Quina } from "../pages/Quina"
import { Timemania } from "../pages/Timemania"

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MegaSena />} />
                    <Route path="/quina" element={<Quina />} />
                    <Route path="/lotofacil" element={<Lotofacil />} />
                    <Route path="/lotomania" element={<Lotomania />} />
                    <Route path="/timemania" element={<Timemania />} />
                    <Route path="/diadesorte" element={<DiaDeSorte />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
