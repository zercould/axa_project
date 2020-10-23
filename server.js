
import express from 'express';
import routes from './routes/routes';

const app = express();
const port = 3000;

app.use(express.json());
routes(app);

app.use( (req, res, next)=>{
  res.status(404);
  if (req.accepts('json')) {
    res.send({error: true, message: 'Route Not found' });
    return;
   }
});

app.listen(port, ()=>{
  console.log('app is listening on port 3000');
});
