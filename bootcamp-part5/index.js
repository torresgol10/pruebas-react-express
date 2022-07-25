const express = require("express");
const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
];

app.use(express.json());

app.get("/api", (request, response) => {
  response.send("HOLAAA");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  response.json(notes.filter((note) => note.id === id));
});

app.post("/api/notes", (request, response) => {
  const body = request.body;

  const ids = notes.map((note) => note.id);

  const maxId = Math.max(...ids);

  const newNote = {
    id: maxId + 1,
    content: body.content,
    important: typeof body.important !== "undefined" ? body.important : false,
    date: new Date().toISOString()
  };

  response.json(newNote);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Ya se ha levantado el server ${PORT}`);
});
