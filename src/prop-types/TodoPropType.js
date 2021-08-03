import PropTypes from 'prop-types';

export const TodoPropTypes = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  completed: PropTypes.bool,
});
