import { addTodo } from '../../../../src/store/todo/actions';
import { v4 as uuidV4 } from 'uuid';
import faker, { random } from 'faker';

/**
 * Create a test todo with fake values.
 *
 * @param id
 */
export function createTestTodo(props) {
  return addTodo({
    id: props.id ?? uuidV4(),
    name: props.name ?? faker.lorem.paragraph(),
    completed: props.completed ?? random.boolean(),
  });
}
