import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { TodoPropTypes } from 'prop-types/TodoPropType';

import './styles.less';

export const TodoItem = ({ todo, onTodoRemoval, onTodoToggle }) => {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            onTodoRemoval(todo);
          }}
        >
          <Button className="remove-todo-button" type="primary" danger>
            X
          </Button>
        </Popconfirm>,
      ]}
      className="list-item"
      key={todo.id}
    >
      <div className="todo-item">
        <Tag color={todo.completed ? 'cyan' : 'red'} className="todo-tag">
          {todo.name}
        </Tag>
      </div>
    </List.Item>
  );
};

TodoItem.propTypes = {
  todo: TodoPropTypes,
  onTodoRemoval: PropTypes.func,
  onTodoToggle: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {
    id: '',
    name: '',
    completed: false,
  },
  onTodoRemoval: null,
  onTodoToggle: null,
};
