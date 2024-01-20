import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

import apiRoutes from './api.js'

app.use(express.json())
app.use(cors())
app.use('/api', apiRoutes)

app.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`)
})
