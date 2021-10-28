const express = require('express')
const caveRoutesRouter = require('./routes/caveRoutes')

const app = express()
const port = 3000

app.use(caveRoutesRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
