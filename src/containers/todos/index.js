import { useEffect, useState } from 'react';
import { Row, Col, Card, PageHeader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodoStart,
  loadTodoStart,
  removeTodoStart,
  toggleTodoStatusStart,
} from 'store/todo/actions';
import { AddTodoForm } from 'components/AddTodoForm';
import { TodoList } from 'components/TodoList';

import './styles.scss';

export const TodosContainer = () => {
  const { todos, loading, loadingForm } = useSelector((state) => state.todo);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
  });
  const dispatch = useDispatch();

  const handleFormSubmit = (todo) => {
    const newTodo = {
      ...todo,
      completed: false,
    };
    dispatch(addTodoStart(newTodo));
  };

  const handleRemoveTodo = (todo) => {
    const newPagination = {
      _page: todos.pagination._page,
      _limit: todos.pagination._limit,
    };
    if (newPagination._page > 1 && todos.data.length === 1) {
      newPagination._page--;
    }
    dispatch(removeTodoStart({ todo, pagination: newPagination }));
  };

  const handleToggleTodoStatus = (todo) => {
    dispatch(toggleTodoStatusStart(todo));
  };

  const handleChangePage = (page) => {
    setPagination({
      ...pagination,
      _page: page,
    });
  };

  useEffect(() => {
    function fetchTodo() {
      dispatch(loadTodoStart(pagination));
    }
    fetchTodo();
  }, [dispatch, pagination]);

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
          <AddTodoForm
            onFormSubmit={handleFormSubmit}
            loadingForm={loadingForm}
          />
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
