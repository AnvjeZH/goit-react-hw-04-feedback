import PropTypes from 'prop-types';
import css from './Feedback.module.css';
export default function Notification({ message }) {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
