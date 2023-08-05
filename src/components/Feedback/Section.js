import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export default function Section({ title, children }) {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.section_title}>{title}</h1>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
