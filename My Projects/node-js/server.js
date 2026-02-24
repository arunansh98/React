const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let tasks = [
  {
    id: 1,
    title: "Wake Up",
    completed: true,
  },
  {
    id: 2,
    title: "Brush your teeth",
    completed: true,
  },
  {
    id: 3,
    title: "Have your breakfast",
    completed: false,
  },
];

app.get("/tasks", (req, res) => {
  return res.json(tasks);
});

app.post("/tasks", (req, res) => {
    const newTask = {
        id : Date.now(),
        title: req.body.title,
        completed: req.body.completed
    };
    tasks.push(newTask);
    res.status(201).json(tasks);
});

app.put("/tasks/:id", (req, res) => {
    const updatedTask = tasks.find(task => task.id === Number(req.params.id));
    updatedTask.title = req.body.title ?? updatedTask.title;
    updatedTask.completed = req.body.completed ?? updatedTask.completed;
    console.log({updatedTask});
    
    res.json(tasks);
})

app.delete("/tasks/:id", (req, res) => {
    tasks = tasks.filter(task => task.id !== Number(req.params.id));
    res.json({
        message: `Task with id ${req.params.id} deleted successfully`
    });
})

app.listen("3000", () => {
  console.log("Server running on port 3000");
});
