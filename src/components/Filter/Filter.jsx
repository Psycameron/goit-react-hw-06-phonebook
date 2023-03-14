// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/slice';

import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Contacts</h2>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          onChange={e => dispatch(filter(e.currentTarget.value))}
        />
      </label>
    </>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
