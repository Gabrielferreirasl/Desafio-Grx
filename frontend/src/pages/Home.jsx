import React, { useState } from "react";
import Question from "../componets/Question";
import SelectQuestion from "../componets/SelectQuestion";

function Home() {
  const [questions, setQuestion] = useState({
    questionOne: '',
    questionTwo: '',
    questionThree: 'Sim',
    questionFour: '',
  });

  const arrOptions = ['Sim', 'Não', 'Não Sei', 'Agora!!'];

  const handleForm = ({ target: { name, value } }) => {
    setQuestion((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
    <header>
      <h1>Desafio Coleta - GRX</h1>
    </header>
    <main>
      <Question 
      question="1 - Você se considera bom em lógica?"
      name="questionOne"
      onClickFunction={ handleForm }
      />
      <Question 
      question="2 - Gosta de aprender com desafios?"
      name="questionTwo"
      onClickFunction={ handleForm }
      />
      <SelectQuestion
      question="3 - Gostaria de fazer parte da GRX?"
      name="questionThree"
      onClickFunction={ handleForm }
      arrOptions={ arrOptions }
      />
    </main>
    </>
  )
}

export default Home;