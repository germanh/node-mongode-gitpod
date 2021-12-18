const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://german2:german2@cluster0.uogm1.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(()=> console.log('DB is connected'))
    .catch(e=> console.log(e));
