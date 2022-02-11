const express = require('express')
const app = express();
const port = 3010;
const fs = require('fs');

app.get('/api/cms/bin/content/v3', (req, res) => {
  let jsonObj;
  let id = req.query.pageId || req.query.espotId;
  console.log(`${new Date().toLocaleString()} :Serving v3 content for id ${id}!`);
  try {
    jsonObj = fs.readFileSync(`content/${id}.json`);
  } catch (err) {
    jsonObj = fs.readFileSync('content/default.json');
  }
    
  let content = JSON.parse(jsonObj);
  res.send(content);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});