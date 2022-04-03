const express = require('express')
const bodyParser = require("body-parser")

const app = express()
const port = 3000
const formator = require("./formatting")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.static(""));
app.post("/formating", async (req, res) => {
  return res.send({
    code: formator.formating(req.body.code)
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})