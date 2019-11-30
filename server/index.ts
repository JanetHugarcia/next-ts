import express from 'express';
import next from 'next';
import morgan from 'morgan';

const PORT =  3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const app = express()
  // settings
  app.set('port', PORT);

  // middlewares
  app.use(morgan('dev'));

  //routes
  app.all('*', (req: express.Request, res: express.Response) => {
    return handle(req, res)
  })
  
  app.listen(app.get('port'), () => {
      console.log(`> Ready on http://localhost:${app.get('port')}`)
  })
})