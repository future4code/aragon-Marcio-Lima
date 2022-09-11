import React from "react"
import { TextFooter } from "./styles"

export const Footer = (props) => {
    return (
        <TextFooter>
            <p>CONCURSO</p>
            {props.concursoId && (
                <span>
                    {props.concursoId} - {props.data}
                </span>
            )}
        </TextFooter>
    )
}
