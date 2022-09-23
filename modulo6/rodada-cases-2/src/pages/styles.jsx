import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    min-height: 100vh;
    align-items: space-around;
    height: 100vh;
    position: relative;

    @media (max-width: 480px) {
        display: grid;
        grid-template-rows: 50vh;
        background-color: #efefef;

        section {
            display: grid;
            width: 100%;
            justify-content: center;
            align-items: center;

            span {
                align-self: center;
            }
        }

        h1 {
            display: grid;
            justify-content: center;
        }

        select {
            margin: 0 auto;
            display: grid;
            justify-content: center;
        }

        img {
            margin: 0 auto;
        }
    }
`

export const SectionLeft = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 30%;
    padding: 50px 50px;
    color: #fff;

    select {
        font-weight: 600;
        font-size: 12px;
        border: none;
        border-radius: 6px;
        padding: 4px 10px;
    }
`
export const SectionRight = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 50px 16px;
    background-color: #efefef;

    span {
        font-size: small;
        position: absolute;
        bottom: 70px;
    }
`
export const NumberList = styled.ul`
    display: flex;
    gap: 16px;
    max-width: 100vw;
    flex-wrap: wrap;
    justify-content: center;

    li {
        display: flex;
        list-style: none;
        width: 70px;
        height: 70px;
        background-color: #fff;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 20px;
    }
`
export const Title = styled.h1`
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    gap: 20px;
`
