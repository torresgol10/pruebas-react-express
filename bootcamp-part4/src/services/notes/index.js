import axios from "axios";

export const createNote = ({ title, body, userId }) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId
    })
    .then(({ data }) => {
      return data;
    });
};

export const getAllNotes = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(({ data }) => {
      return data;
    });
};
