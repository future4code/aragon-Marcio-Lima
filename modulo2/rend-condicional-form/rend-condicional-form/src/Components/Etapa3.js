import React from "react";

class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h2>Etapa 3 - Informações Gerais de EnsinoO</h2>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
            </div>
        );
    }
}

export default Etapa3;