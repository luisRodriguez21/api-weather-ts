import express from 'express' // ESModules ------ require commonjs
import routes from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

// _  o  _req - ignora variable si no se usa

app.get('/ping', (_req, res) => {
  console.log('something')
  res.send('something')
})

app.use('/api/diaries', routes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
