import { create, defaults, router } from 'json-server'
import path from 'path'

const app = create()
const routes = router(path.join(__dirname, 'db', 'root.json'))
const middlewares = defaults()
const PORT = 8080

app.get('/', (req, res, next) => {
  res.json('server was running')
})

app.use(middlewares)
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`server was running on http://localhost:${PORT}`)
})