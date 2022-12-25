import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ option, onLeaveFeedback }) {
  const options = Object.keys(option);

  return options.map(value => {
    return (
      <Button key={value} type="button" name={value} onClick={onLeaveFeedback}>
        {value}
      </Button>
    );
  });
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
};
