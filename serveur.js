import express from 'express';
import useRoute from './routes/users.route.js';
import tweetRoutes from './routes/tweets.route.js';


const app = express()

app.use(express.json());


app.use('/tweets', tweetRoutes)
app.use('/',useRoute);

app.listen(8000);