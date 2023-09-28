import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';

function CalculatorButton({ value, className, isSpecificButton }) {
  let buttonClassName = 'calculator-button';

  if (isSpecificButton) {
    buttonClassName += ' specific-button';
  }

  return (
    <button type="button" className={`${buttonClassName} ${className}`}>
      {value}
    </button>
  );
}

CalculatorButton.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  isSpecificButton: PropTypes.bool,
};

CalculatorButton.defaultProps = {
  value: '',
  className: '',
  isSpecificButton: false,
};

export default CalculatorButton;
