import PropTypes from 'prop-types';
import css from './Feedback.module.css';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p className={css.stats}>
        Good: <span className={css.stats_amount}>{good}</span>
      </p>
      <p className={css.stats}>
        Neutral: <span className={css.stats_amount}>{neutral}</span>
      </p>
      <p className={css.stats}>
        Bad: <span className={css.stats_amount}>{bad}</span>
      </p>
      <p className={css.stats}>
        Total: <span className={css.stats_amount}>{total}</span>
      </p>
      <p className={css.stats}>
        Positive feedback:{' '}
        <span className={css.stats_amount}>{positivePercentage}%</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
