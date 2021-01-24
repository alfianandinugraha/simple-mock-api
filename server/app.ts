import { create } from 'json-server';

const app = create()
const PORT = 8080

app.get('/', (req, res, next) => {
  res.json('server was running')
})

app.listen(PORT, () => {
  console.log(`server was running on http://localhost:${PORT}`)
})