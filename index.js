const express = require('express');
const app = express();
app.use(express.json());
const todoDB = [];

app.post('/create-todo', (req, res)=>{
    const { task } = req.body;
    const randomId = Math.floor(Math.random() * 1000);
    // console.log(randomId);
    const todoItem = {
        id: randomId,
        task: task
    };

    todoDB.push(todoItem);

    const response = {
        'message':'Todo created successfully done!',
        'data': todoItem
    }
    
    return res.status(201).json(response);
});

app.get('/todo-list', (req,res)=>{
    return res.status(200).json(todoDB);
})



const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
});