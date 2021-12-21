const express = require('express')
const app = express();
const port = 3010;
const fs = require('fs');

app.get('/content', (req, res) => {

    let jsonObj = fs.readFileSync(`content/${req.query.espotId}.json`);
    let content = JSON.parse(jsonObj);
    res.send(content);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});