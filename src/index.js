const express = require('express');

const app = express();

app.get('/', (req, res) => res.send({ success: true }));

app.post('/signup', (req, res) => {
  const { username, password } = res.params;
  res.send({ success: true });
});

app.post('/login', (req, res) => res.send({ success: true }));

app.post('/upload', (req, res) => res.send({ success: true }));

app.get('/classify/:user_id/:file_id', (req, res) => res.send({ success: true }));

app.listen(3000, () => console.log('Listening on port 3000'));
