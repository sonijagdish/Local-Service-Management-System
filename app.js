const express = require("express");

const app = express();
const PORT = 3400;

const user = {
  id: 1,
  name: "jagish",
  age: 20,
}

const users = [
  {
    id: 1, 
    name: "Daksh",
    age: 20
  },
  {
    id: 2, 
    name: "Meet",
    age: 21
  },
  {
    id: 3, 
    name: "Jigar",
    age: 22
  },
  {
    id: 4, 
    name: "Kushal",
    age: 12
  },
  {
    id: 5, 
    name: "Vedant",
    age: 15
  },
]

app.get("/test", (req, res) => {
  res.send("Test api called")
})

app.get("/user", (req, res) => {
  res.json({message: "Data fetched successfully", data: user});
})

app.get("/users", (req, res) => {
  res.json({message: "Data fetched successfully", data: users});
})

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => 
    user.id === id
  )

  if(user){
    res.json({message: "User found", user});
  } else {
    res.json({message: `User not found with this id: ${id}`});
  }
})

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})

