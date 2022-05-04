import React from "react";
import PropTypes from 'prop-types';

function Question({ onClickFunction, question, name }) {

  return (
    <div>
    <h2>{ question }</h2>
      <div>
        <button name={ name } onClick={ onClickFunction }value="Sim">Sim</button>
        <button name={ name } onClick={ onClickFunction } value="Não">Não</button>
      </div>    
    </div>
  )
}

Question.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Question;
