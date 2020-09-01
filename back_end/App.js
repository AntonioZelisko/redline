const express = require("express");
const bodyParser = require("body-parser");

const connection = require("../red_line_project_backEnd/app/bdd/Connexion");

connection.connect((err) => {
  if (err) {
    return err;
  }
});
const Users = require("./app/queries/Users");

const app = express();
const cors = require("cors");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
/*const SELECT_ALL_PRODUCTS_QUERY = `SELECT * FROM users`;
app.get("/us", (request, response) => {
  connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      return response.send(err);
    } else {
      return response.json({
        data: results,
      });
    }
  });
});
*/
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

/*______________________________________________________________________________________________________________________

CALLS : Users */

app.get("/users", Users.getUsers);
app.post("/users/registration", Users.createUser);
app.post("/users/login", Users.connectionUser);
app.put("/users/:id_utilisateur", Users.updateUser);
app.delete("/users/:id_utilisateur", Users.deleteUser);
