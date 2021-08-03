import { useEffect, useState } from 'react';
import { Row, Col, Card, PageHeader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  loadTodoStart,
  removeTodo,
  toggleTodoStatus,
} from 'store/todo/actions';
import { AddTodoForm } from 'components/AddTodoForm';
import { TodoList } from 'components/TodoList';
import { message } from 'antd';

import './styles.less';

export const TodosContainer = () => {
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
  });
  const { todos, loading, error } = useSelector((state) => state.todo);
  console.log(todos, loading, error);

  const dispatch = useDispatch();

  const handleFormSubmit = (todo) => {
    dispatch(addTodo(todo));
    message.success('Todo added!');
  };

  const handleRemoveTodo = (todo) => {
    dispatch(removeTodo(todo));
    message.warn('Todo removed!');
  };

  const handleToggleTodoStatus = (todo) => {
    dispatch(toggleTodoStatus(todo));
    message.info('Todo state updated!');
  };

  const handleChangePage = (page) => {
    setPagination({
      ...pagination,
      _page: page,
    });
  };

  const fetchTodo = () => {
    dispatch(loadTodoStart(pagination));
  };

  useEffect(() => {
    fetchTodo();
  }, [pagination]);

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader
          title="Add Todo"
          subTitle="To add a todo, just fill the form below and click in add todo."
        />
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new todo">
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Todo List">
          <TodoList
            loading={loading}
            todos={todos.data}
            pagination={todos.pagination}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleToggleTodoStatus}
            onChangePage={handleChangePage}
          />
        </Card>
      </Col>
    </Row>
  );
};
