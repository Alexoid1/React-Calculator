import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, handleClick }) {
  return (
    <>
      <button type="button" onClick={() => { handleClick(name); }}>
        {name}
      </button>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
