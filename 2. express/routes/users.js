var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users = [
    {
      active: false,
      id: '332903',
      name: 'sushant'
    },
    {
      id: 'fjewoi',
      name: 'sabin',
      active: true
    }
  ]
  if(req.query.active) {
    users = users.filter(u => u.active)
  }
  res.send(users);
});

const justARegularFunction = (req, res, next) => {
  console.log('hello')
  next()
}

router.get('/dummy', justARegularFunction,(req, res, next) => {
  throw new Error('just an error')
})

router.get('/:id', function(req, res, next) {
  console.log(`i'm in get :id route`)
  let users = [
    {
      active: false,
      id: '332903',
      name: 'sushant'
    },
    {
      id: 'fjewoi',
      name: 'sabin',
      active: true
    }
  ]

  if(req.query.active) {
    users = users.filter(u => u.active)
  }
  res.send(users);
});



router.post('/', function(req, res, next) {
  console.log(req.body)
  const users = [
    {
      id: '332903',
      name: 'sushant'
    },
    {
      id: 'fjewoi',
      name: 'sabin'
    }
  ]
  res.statusCode =201 
  res.send('this is a post request');
});

module.exports = router;
