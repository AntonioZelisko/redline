const pool = require("../bdd/Connexion");

/*______________________________________________________________________________________________________________________

DEMANDE DE DONNÉES */

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY idUser ASC", (error, results) => {
    if (error) {
      throw error;
    } else {
      response.status(200).json(results.rows);
    }
  });
};

/*______________________________________________________________________________________________________________________

CONNEXION UTILISATEUR */

const connectionUser = (request, response) => {
  const { mail, password } = request.body;
  pool.query(
    `SELECT * FROM users WHERE mail = $1 AND password = $2`,
    [mail, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows);

      if (results.rows.length === 0) {
        response.status(400).end(); //response.status(400).send('Login or password does not exist !');
      }
      response.status(200).json(results.rows);
    }
  );
};

/*______________________________________________________________________________________________________________________

CRÉÉR UN UTILISATEUR */

const createUser = (request, response) => {
  const { username, mail, password } = request.body;

  pool.query(
    `INSERT INTO users (username,mail,password) VALUES ($1, $2, $3)`,
    [username, mail, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(results.rows);
    }
  );
};

/*______________________________________________________________________________________________________________________

SUPPRIMER UN UTILISATEUR */

const deleteUser = (request, response) => {
  const idUser = parseInt(request.params.idUser);

  pool.query(`DELETE FROM users WHERE id = ${idUser}`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

/*______________________________________________________________________________________________________________________

MODIFIER UN UTILISATEUR */

const updateUser = (request, response) => {
  const idUser = parseInt(request.params.idUser);
  const { username, mail, password } = request.body;

  pool.query(
    "UPDATE users SET username = $1, mail = $2 WHERE id = $3",
    [username, mail, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${idUser}`);
    }
  );
};

/*______________________________________________________________________________________________________________________

EXPORTATION DES MODULES */

module.exports = {
  getUsers,
  connectionUser,
  createUser,
  deleteUser,
  updateUser,
};
