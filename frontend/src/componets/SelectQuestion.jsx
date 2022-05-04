import React from "react";
import PropTypes from 'prop-types';

function SelectQuestion({ onClickFunction, question, name, arrOptions }) {
  return (
    <div>
      <h2>{ question }</h2>
    <select name={ name } onChange={ onClickFunction } >
      { arrOptions.map((option) => (<option key={ option } value={ option }>{ option }</option>))}
    </select>     
    </div>
  )
}

SelectQuestion.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  arrOptions: PropTypes.arrayOf(PropTypes.string),
}

export default SelectQuestion;
