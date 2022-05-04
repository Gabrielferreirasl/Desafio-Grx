import React, { useState } from "react";
import Question from "../componets/Question";

function Home() {
  const [questions, setQuestion] = useState({
    questionOne: '',
    questionTwo: '',
    questionThree: 'sim',
    questionFour: '',
  });

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
    </main>
    </>
  )
}

export default Home;