import express, { Application, Request, Response, NextFunction } from 'express';
//init the express
const app: Application = express();


//endpoint
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello there ... obi wan kenobi')
});

const PORT = 5000;
app.listen(PORT, () =>
    console.log(`server is listning on port http/${PORT}`)
);
