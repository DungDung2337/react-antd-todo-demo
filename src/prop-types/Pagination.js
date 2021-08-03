import PropTypes from 'prop-types';

export const PaginationPropTypes = PropTypes.shape({
  _page: PropTypes.number,
  _limit: PropTypes.number,
  _totalRows: PropTypes.number,
});
