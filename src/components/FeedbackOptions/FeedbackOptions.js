import React from 'react';
import PropTypes from 'prop-types';
import { BtnList, Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <BtnList>
    {Object.keys(options).map(btnName => {
      return (
        <li key={btnName}>
          <Btn type="button" onClick={onLeaveFeedback}>
            {btnName}
          </Btn>
        </li>
      );
    })}
  </BtnList>
);
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
