var express = require('express');
var router = express.Router();

/* GET home page. */
router.delete('/', async function(req, res, next) {
  try {
    const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todos = (await todosResponse.json())
    return res.json(todos);
  } catch (error) {
    next(error);
    return undefined;
  }
});

module.exports = router;
