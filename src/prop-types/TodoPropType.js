import PropTypes from 'prop-types';

export const TodoPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  completed: PropTypes.bool,
});
