const express = require("express");

// import routes
const {users} = require("./data/users.json");
const {books} = require("./books/books.json");

const app = express();

const PORT = 8081;

app.use(express.json());

// npm i nodemon --save-dev
// const data = ["divakar", "dev"];
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running succesfully",
  });
});

/* Route - /users
   Method - GET
   Description - Get All Users
   Access - Public 
   Parameters - None */
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    //data: users
  });
});

app.all("*", (req, res) => {
  res.status(500).json({
    message: "This route doesn't exist",
  });
}); 

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});