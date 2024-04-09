const express = require("express");



// import routes
const usersRouter = require("./routes/users");
//const booksRouter = require("./routes/books");

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


// http://localhost:801/users/
app.use("/users", usersRouter);
//app.use("/books", booksRouter);


app.all("*", (req, res) => {
  res.status(500).json({
    message: "This route doesn't exist",
  });
}); 

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});