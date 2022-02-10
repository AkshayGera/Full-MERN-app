import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/hello',(req,res)=>{
    res.send("Hello World");
});

app.post('/hello',(req,res)=>{
    res.send("Hello There!!!!");
});

app.listen(8000, ()=>{console.log("Server is running on port 8000")});