var express = require('express');
var router = express.Router();
var crypto = require('crypto')

let todos = [{
  id: crypto.randomUUID(),
  title: "Finish writing unit tests",
  status: "Completed"
}]

/* GET all todos. */
router.get('/', function (req, res, next) {
  res.send(todos);
});

router.delete('/:id', function (req, res, next) {
  const idToDelete = req.params.id;
  todos = todos.filter(todo => {
    return todo.id != idToDelete;
  })
  res.end()
});



module.exports = router;
