import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';
import '../logic/calculate';

function CalculatorButton({
  value, className, isSpecificButton, onClick,
}) {
  let buttonClassName = 'calculator-button';

  if (isSpecificButton) {
    buttonClassName += ' specific-button';
  }

  return (
    <button type="button" className={`${buttonClassName} ${className}`} onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

CalculatorButton.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  isSpecificButton: PropTypes.bool,
  onClick: PropTypes.func,
};

CalculatorButton.defaultProps = {
  value: '',
  className: '',
  isSpecificButton: false,
  onClick: () => {},
};

export default CalculatorButton;
