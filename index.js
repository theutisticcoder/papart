const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.statusCode = 302;
    res.setHeader("Location", "https://the-paperwhisperer.pixels.com/");
    res.end();
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})