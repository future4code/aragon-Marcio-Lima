import React from "react"
import styled from "styled-components"
import travolta from "../assets/travolta.gif"

const GifContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Error = () => {
    return (
        <GifContainer>
            <img width={600} src={travolta} alt="confused-travolta-gif" />
        </GifContainer>
    )
}
