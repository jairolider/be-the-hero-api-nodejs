const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/lista uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: SQLite, MySQL, Oracle
 * NoSQL: MongoDB
 */

/**
 * Driver: select * from users
 * Query Builder: table('users').select(*).where()
 */

/**
 * Entidades:
 * 
 * ONG
 * Caso
 * 
 * Funcionalidades:
 * 
 * Login de ONG
 * Logout de ONG
 * Cadastro de ONG
 * Casdatrar novos casos
 * Deletar novos casos
 * Listar casos específicos de uma ONG
 * Listar todos os casos
 * Entrar em contato com a ONG
 * 
 * 
 */





