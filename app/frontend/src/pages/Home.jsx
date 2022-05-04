import React, { useState } from "react";
import Question from "../componets/Question";
import SelectQuestion from "../componets/SelectQuestion";
import TextQuestion from "../componets/TextQuestion";

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
      <TextQuestion
      question="4 - Por favor, justifique sua resposta anterior"
      name="questionFour"
      onClickFunction={ handleForm }
      minLength="15"
      maxLength="200"
      />
    </main>
    </>
  )
}

export default Home;