"use strict";

var pool = require("../bdd/Connexion");
/*______________________________________________________________________________________________________________________

DEMANDE DE DONNÉES */


var getUsers = function getUsers(request, response) {
  pool.query("SELECT * FROM users ORDER BY idUser ASC", function (error, results) {
    if (error) {
      throw error;
    } else {
      response.status(200).json(results.rows);
    }
  });
};
/*______________________________________________________________________________________________________________________

CONNEXION UTILISATEUR */


var connectionUser = function connectionUser(request, response) {
  var _request$body = request.body,
      mail = _request$body.mail,
      password = _request$body.password;
  pool.query("SELECT * FROM users WHERE mail = $1 AND password = $2", [mail, password], function (error, results) {
    if (error) {
      throw error;
    }

    console.log(results.rows);

    if (results.rows.length === 0) {
      response.status(400).end(); //response.status(400).send('Login or password does not exist !');
    }

    response.status(200).json(results.rows);
  });
};
/*______________________________________________________________________________________________________________________

CRÉÉR UN UTILISATEUR */


var createUser = function createUser(request, response) {
  var _request$body2 = request.body,
      username = _request$body2.username,
      mail = _request$body2.mail,
      password = _request$body2.password;
  pool.query("INSERT INTO users (username,mail,password) VALUES ($1, $2, $3)", [username, mail, password], function (error, results) {
    if (error) {
      throw error;
    }

    response.status(201).send(results.rows);
  });
};
/*______________________________________________________________________________________________________________________

SUPPRIMER UN UTILISATEUR */


var deleteUser = function deleteUser(request, response) {
  var idUser = parseInt(request.params.idUser);
  pool.query("DELETE FROM users WHERE id = ".concat(idUser), function (error, results) {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
};
/*______________________________________________________________________________________________________________________

MODIFIER UN UTILISATEUR */


var updateUser = function updateUser(request, response) {
  var idUser = parseInt(request.params.idUser);
  var _request$body3 = request.body,
      username = _request$body3.username,
      mail = _request$body3.mail,
      password = _request$body3.password;
  pool.query("UPDATE users SET username = $1, mail = $2 WHERE id = $3", [username, mail, password], function (error, results) {
    if (error) {
      throw error;
    }

    response.status(200).send("User modified with ID: ".concat(idUser));
  });
};
/*______________________________________________________________________________________________________________________

EXPORTATION DES MODULES */


module.exports = {
  getUsers: getUsers,
  connectionUser: connectionUser,
  createUser: createUser,
  deleteUser: deleteUser,
  updateUser: updateUser
};