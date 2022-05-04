import React from "react";
import PropTypes from 'prop-types';

function TextQuestion({ onClickFunction, question, name, minLength, maxLength }) {
  return (
    <div>
      <h2>{ question }</h2>
      <textarea
      name={ name }
      onChange={ onClickFunction }
      minLength={ minLength }
      maxLength={ maxLength }
      />    
    </div>
  )
}

TextQuestion.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minLength: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
}

export default TextQuestion;
