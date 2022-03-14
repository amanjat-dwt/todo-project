import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createTask = (task) => API.post("/tasks", task);
export const deleteTask = (_id) => API.delete(`/tasks/${_id}`);
export const updateTask = (_id, updatedTask) =>
  API.patch(`/tasks/${_id}`, updatedTask);
