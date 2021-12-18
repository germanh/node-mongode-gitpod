const express = require('express');
const app = express();

const Task = require('./model/Task');

//settings
app.set('views', __dirname + '/views');
console.log(__dirname);
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', async (req, res)=>{
    const tasks = await Task.find();
    console.log(tasks);
    res.render('index', {tasks});
})

// Create Task
app.post('/create', async (req, res)=>{
    //console.log(req.body);
    const newTask = new Task({
        task: req.body.task, description: req.body.description
    })
    console.log(newTask);
    await newTask.save();
    //res.send('Recived');
    res.redirect('/');
})

// STATIC Files
app.use(express.static(__dirname + '/public'));

module.exports = app;