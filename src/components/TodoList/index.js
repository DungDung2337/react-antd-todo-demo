import { List } from 'antd';
import { TodoItem } from 'components/TodoItem';
import PropTypes from 'prop-types';

export const TodoList = ({
  todos,
  onTodoRemoval,
  onTodoToggle,
  loading,
  pagination,
  onChangePage,
}) => (
  <List
    loading={loading}
    locale={{
      emptyText: "There's nothing to do :(",
    }}
    dataSource={todos}
    renderItem={(todo) => (
      <TodoItem
        todo={todo}
        onTodoToggle={onTodoToggle}
        onTodoRemoval={onTodoRemoval}
      />
    )}
    pagination={{
      disabled: loading,
      position: 'bottom',
      current: pagination._page,
      pageSize: pagination._limit,
      total: pagination._totalRows,
      onChange: onChangePage,
      pageSizeOptions: [],
    }}
  />
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  loading: PropTypes.bool,
  totalRow: PropTypes.number,
  pagination: PropTypes.shape({
    _page: PropTypes.number,
    _limit: PropTypes.number,
    _totalRows: PropTypes.number,
  }),
  onTodoRemoval: PropTypes.func,
  onTodoToggle: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  loading: false,
  totalRow: 0,
  pagination: {
    _page: 1,
    _limit: 10,
    _totalRows: 0,
  },
  onTodoRemoval: null,
  onTodoToggle: null,
};
