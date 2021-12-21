const express = require('express')
const app = express();
const port = 3010;
const fs = require('fs');

app.get('/api/cms/bin/content', (req, res) => {
  let jsonObj;
  try {
    jsonObj = fs.readFileSync(`content/${req.query.espotId}.json`);
  } catch (err) {
    jsonObj = fs.readFileSync('content/default.json');
  }
    
  let content = JSON.parse(jsonObj);
  res.send(content);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});