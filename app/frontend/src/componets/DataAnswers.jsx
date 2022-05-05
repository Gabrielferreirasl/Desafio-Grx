import React from "react";

function DataAnswers({ infoAnswers }) {
  return (
    <section>
      <h4>{`Positiva: ${infoAnswers.QuantidadePositiva}`}</h4>
      <h4>{`Negativa: ${infoAnswers.QuantidadeNegativa}`}</h4>
      <h4>{`Não Avaliada: ${infoAnswers.QuantidadeNaoAvaliada}`}</h4>
    </section>
  )
}

export default DataAnswers;