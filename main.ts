import { Hono } from 'npm:hono'
import { serveStatic } from 'npm:hono/deno'

const app = new Hono()

app.use('/*', serveStatic({ root: 'public/' }))
app.get('/hello', (c) => {
  return c.text('Hello Hono!')
})

Deno.serve(app.fetch)
