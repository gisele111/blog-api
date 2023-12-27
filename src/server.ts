import express from 'express';
import blogRoute from './routes/index';
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
});


app.use('/api',blogRoute)
const port = 3000;



app.listen(port,()=>console.log('app is running on port 3000'))