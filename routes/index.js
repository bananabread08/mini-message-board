const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Send a New Message' });
});

router.post('/new', function (req, res, next) {
  const { messageName, messageText } = req.body;
  messages.push({ user: messageName, text: messageText, added: new Date() });
  res.redirect('/');
});

module.exports = router;
