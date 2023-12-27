import express from 'express';

const app = express();

const port = 3000;

app.get('/welcome',(req,res)=>{
res.send('Hell world hi wer ')
})

app.listen(port,()=>console.log('app is running on port 3000'))