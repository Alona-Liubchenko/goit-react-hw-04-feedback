import React from 'react';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {Object.keys(options).map(btnName => {
      return (
        <li key={btnName}>
          <button type="button" onClick={onLeaveFeedback}>
            {btnName}
          </button>
        </li>
      );
    })}
  </ul>
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
