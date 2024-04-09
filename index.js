const express = require("express");

// import route

//const {books} = require("./data/books.json");
const {users} = require("./data/users.json");

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



/* Description - Get All Users
   Route - /users
   Method - GET
   Access - Public 
   Parameters - None */
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users
  });
});




/* Description - Get single user by id
  Route - /users/:id
   Method - GET
   Access - Public 
   Parameters - id
   */
app.get("/users/:id", (req, res) => {
  const {id} = req.params;
  const user = users.find((each) => each.id === id);
  if(!user){
    return res.status(404).json({
    success: false,
    message: "User Not Found"
    })
  }
    res.status(200).json({
    success: true,
    data: user
  });
});

/* Description - Create a New User
  Route - /users
   Method - POST
   Access - Public 
   Parameters - None
   */
 app.post("/users", (req,res) => {
  const{id,name, surname, email, subscriptionType, subscriptionDate} = req.body

  const user = users.find((each) => each.id === id);
  if(user){
    return res.status(404).json({
    success: false,
    message: "User Already Exists with the given id"
    })
 }
 users.push({
  id,
  name, 
  surname, 
  email, 
  subscriptionType, 
  subscriptionDate
 })
 return res.status(200).json({
    success: true,
    data: user
  });
});



/* Description - Updating a user by id
  Route - /users
   Method - PUT
   Access - Public 
   Parameters - id
   */ 
app.put("/users/:id", (req,res) => {
  const{id} = req.params;
  const{data} = req.body;

  const user = users.find((each) => each.id === id);
 if(!user){
    return res.status(404).json({
    success: false,
    message: "User Not Found"
    })
  }
  const updateUser = users.map((each) => {
  if(each.id==id){
    return{
      ...each,
      ...data
    };
  }
  return each 
})
  return res.status(200).json({
    success: true,
    data: updateUser
  });
});



/* Description - Deleting a user by id
  Route - /users/:id
   Method - DELETE
   Access - Public 
   Parameters - id
   */
  
  app.delete("/users/:id", (req,res) => {
  const{id} = req.params;

  const user = users.find((each) => each.id === id);
  if(!user){
    return res.status(404).json({
    success: false,
    message: "User Not Found"
    })
  }
  const index = users.indexOf(user);
  users.splice(index,1);
  
  return res.status(200).json({
    success: true,
    data: users
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