import React, { useState } from "react";
import Question from "../componets/Question";
import SelectQuestion from "../componets/SelectQuestion";
import TextQuestion from "../componets/TextQuestion";
import { postData, requestData } from "../services/requests";

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
    }));
  }

  const verifyBtn = () => {
    const arrResponses = Object.values(questions);
    return arrResponses.some((res) => res === '');
  }

  const handleClick = async() => {
    await postData('/answers', questions);
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
      selected={ questions.questionOne }
      />
      <Question 
      question="2 - Gosta de aprender com desafios?"
      name="questionTwo"
      onClickFunction={ handleForm }
      selected={ questions.questionTwo }
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
      field={ questions.questionFour }
      />
      <button
      type='button'
      onClick={ handleClick }
      disabled={ verifyBtn() }
      className="login"
      >
        Enviar
      </button>
    </main>
    </>
  )
}

export default Home;