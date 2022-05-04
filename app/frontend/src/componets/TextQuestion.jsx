import React from "react";
import PropTypes from 'prop-types';

function TextQuestion({ onClickFunction, question, name, field }) {
  const verifyTextLimit = () => {
    return field.length < 15 || field.length > 200
  }

  return (
    <div>
      <h2>{ question }</h2>
      <textarea
      name={ name }
      onChange={ onClickFunction }
      value={ field }
      className="response-textArea"
      />
      <span
      className={ verifyTextLimit() && 'field-limit'}
      >
        { field.length }
      </span>    
    </div>
  )
}

TextQuestion.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
}

export default TextQuestion;
