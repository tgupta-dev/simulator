const express = require('express')
const app = express();
const port = 3010;
const fs = require('fs');

app.get('/api/cms/bin/content/:version', (req, res) => {

  let jsonObj;
  const version = req.params.version;
  const locale = req.query.locale;
  const id = req.query.pageId || req.query.espotId;
  const path = `content/${version}/${locale}/${id}.json`;
  const fallbackPath = `content/${version}/${locale}/default.json`;
  console.log(`${new Date().toLocaleString()} :Serving ${path}!`);

  try {
    jsonObj = fs.readFileSync(path);
    let content = JSON.parse(jsonObj);
    res.send(content);
  } catch (err) {
    res.send("");
  }


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});