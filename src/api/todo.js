import axiosClient from './axiosClient';
const url = '/api/todo';

const todoApi = {
  getAll(params) {
    return axiosClient.get(url, { params });
  },

  addTodoItem(data) {
    return axiosClient.post(url, data);
  },

  updateTodoItem(id, data) {
    const urlWithId = url + id;
    return axiosClient.put(urlWithId, data);
  },

  deleteTodoItem(id) {
    const urlWithId = url + id;
    return axiosClient.delete(urlWithId);
  },
};

export default todoApi;
