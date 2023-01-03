import { Context, Hono } from "hono";
import { serveStatic } from 'hono/serve-static.bun';
import { bearerAuth } from 'hono/bearer-auth'
const port = parseInt(process.env.PORT) || 3000;

const app = new Hono();

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));

app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});

const token = 'mysecrettoken'

app.use('/auth/*', bearerAuth({ token }))

app.get('/auth/page', (c) => {
  return c.text('you are authorized')
})

console.log(`Running at http://localhost:${port}`);

//converter with params
app.get("/binaryToHexa", (c) => c.text("test"))

//converter with params
app.get("/huh", (c) => c.redirect("/binaryToHexa"))

export default {
  port,
  fetch: app.fetch
};
