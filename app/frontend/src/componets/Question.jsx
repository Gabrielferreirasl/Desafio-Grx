import React from "react";
import PropTypes from 'prop-types';
import '../styles/home.css'

function Question({ onClickFunction, question, name, selected }) {
  return (
    <div>
    <h2>{ question }</h2>
      <div>
        <button
        className={ selected === 'Sim' ? 'selected-btn' : '' }
        name={ name } 
        onClick={ onClickFunction }
        value="Sim"
        >
          Sim
        </button>
        <button
        name={ name }
        onClick={ onClickFunction }
        value="Não"
        className={ selected === 'Não' ? 'selected-btn' : '' }
        >
          Não
        </button>
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
