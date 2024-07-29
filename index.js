/* Linter anyone? */

const marked = require('marked')
const path = require('node:path')
const express = require('express')
const fs = require('node:fs');

const app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

/* Maybe make a loader so this is less tedious? */
function load_md(file) {
  let data = fs.readFileSync(path.join(__dirname, 'pages/', file), 'utf8');
  return marked.parse(data);
}

app.get('/', (req, res) => {
  res.render('index', {
    data: load_md('index.md')
  })
})
/* ---- */  

let server = app.listen(7777, () => {
  console.log('Started express server on port ' + server.address().port)
})