import PropTypes from 'prop-types';
import css from './Feedback.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.options_list}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.options}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            <span className={css.text_options}>{option}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
